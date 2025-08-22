/* globals marked, DOMPurify */
const listEl = document.getElementById("fileList");
const filterEl = document.getElementById("filter");
const contentEl = document.getElementById("content");
const defsCountEl = document.getElementById("defsCount");
const toggleHighlightEl = document.getElementById("toggleHighlight");
const tooltip = document.getElementById("tooltip");

let manifest = [];
let current = null;
let definitions = {};

// tooltip handlers for highlighted terms
contentEl.addEventListener("mouseover", e => {
  const t = e.target.closest(".def-term");
  if (!t) return;
  const term = t.dataset.term;
  tooltip.textContent = definitions[term] || "";
  tooltip.style.display = "block";
});

contentEl.addEventListener("mouseout", e => {
  if (!e.target.closest(".def-term")) return;
  tooltip.style.display = "none";
});

contentEl.addEventListener("mousemove", e => {
  if (tooltip.style.display === "none") return;
  tooltip.style.left = e.pageX + 12 + "px";
  tooltip.style.top = e.pageY + 12 + "px";
});

init();

async function init() {
  try {
    // load list of files
    manifest = await fetchJSON("manifest.json");
    manifest.sort((a,b)=>a.path.localeCompare(b.path));
    renderList(manifest);

    // filter
    filterEl.addEventListener("input", () => {
      const q = filterEl.value.trim().toLowerCase();
      const items = manifest.filter(m =>
        m.path.toLowerCase().includes(q) || (m.title && m.title.toLowerCase().includes(q))
      );
      renderList(items);
    });

    // toggle highlight
    toggleHighlightEl.addEventListener("change", () => rehighlight());

    // deep-link support ?src=md/filename.md
    const u = new URLSearchParams(location.search).get("src");
    if (u) openFile(u);
  } catch (e) {
    contentEl.innerHTML = `<p style="color:#ff8383">could not load manifest.json</p>`;
    console.error(e);
  }
}

function renderList(items) {
  listEl.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = item.title || item.path.split("/").pop();
    btn.title = item.path;
    btn.className = (current === item.path) ? "active" : "";
    btn.addEventListener("click", () => {
      current = item.path;
      [...listEl.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      openFile(item.path);
      const url = new URL(location.href);
      url.searchParams.set("src", item.path);
      history.replaceState(null, "", url.toString());
    });
    li.appendChild(btn);
    listEl.appendChild(li);
  }
}

async function openFile(path) {
  defsCountEl.textContent = "";
  definitions = {};
  tooltip.style.display = "none";
  contentEl.innerHTML = `<p class="muted">loading <code>${escapeHTML(path)}</code> …</p>`;
  try {
    const md = await fetchText(path);
    const html = DOMPurify.sanitize(marked.parse(md, { mangle:false, headerIds:true }));
    contentEl.innerHTML = html;
    definitions = parseDefinitions(md) || extractDefinitionsFromRendered(contentEl);
    const n = Object.keys(definitions).length;
    defsCountEl.textContent = n ? `${n} definitions found` : "no definitions found";
    rehighlight();
  } catch (e) {
    contentEl.innerHTML = `<p style="color:#ff8383">failed to load <code>${escapeHTML(path)}</code></p>`;
    console.error(e);
  }
}

function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
async function fetchJSON(u){const r=await fetch(u,{cache:"no-store"}); if(!r.ok) throw new Error(r.status); return r.json();}
async function fetchText(u){
  const tries = [u];
  if (!u.startsWith("docs/")) tries.push(`docs/${u}`);
  let lastErr;
  for (const t of tries) {
    try {
      const r = await fetch(t, {cache:"no-store"});
      if (r.ok) return await r.text();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error(`failed to fetch ${u}`);
}

/* -------- definition sources (like your example) --------
   1) reference style in raw md: [Term]: definition
   2) section "## Definitions"/"## Glossary" with either:
      - bullets: **Term** - Definition
      - table: | Term | Definition |
*/
function parseDefinitions(md) {
  const defs = {};
  md = md.replace(/\r\n/g, "\n");

  // reference-style
  const refRe = /^\[([^\]]+)\]:\s+(.+)$/gm;
  let m;
  while ((m = refRe.exec(md))) {
    defs[m[1].trim().toLowerCase()] = m[2].trim();
  }

  // section-based
  const secRe = /^##\s+(?:\d+\s+)?(?:definitions|glossary)\s*$/gim;
  let match;
  while ((match = secRe.exec(md))) {
    const start = match.index + match[0].length;
    const rest = md.slice(start);
    const next = rest.search(/\n##\s+/);
    const block = rest.slice(0, next === -1 ? rest.length : next);

    // bullets: **Term** - Definition
    block.split(/\n/).forEach(line => {
      const b = line.match(/\*\*(.+?)\*\*\s*[-:]\s*(.+)/);
      if (b) defs[b[1].trim().toLowerCase()] = b[2].trim();
    });

    // table rows
    const rowRe = /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/gm;
    let row;
    while ((row = rowRe.exec(block))) {
      const term = row[1].trim();
      const def  = row[2].trim();
      if (!term || /^term$/i.test(term) || /^[-\s]+$/.test(term)) continue;
      if (!def  || /^definition$/i.test(def) || /^[-\s]+$/.test(def)) continue;
      defs[term.toLowerCase()] = def;
    }
  }

  return defs;
}

// fallback: scrape first definitions/glossary table from rendered HTML
function extractDefinitionsFromRendered(root) {
  const defs = {};
  const heads = [...root.querySelectorAll("h1,h2,h3,h4,h5,h6")];
  const hit = heads.find(h => /definition|glossary/i.test(h.textContent));
  let tbl = null;
  if (hit) { let n = hit.nextElementSibling; while (n && n.tagName.toLowerCase()!=="table") n=n.nextElementSibling; tbl = n; }
  if (!tbl) {
    tbl = [...root.querySelectorAll("table")].find(t => {
      const first = t.querySelector("tr");
      return first && /definition|glossary/i.test(first.textContent);
    });
  }
  if (!tbl) return defs;
  const rows = [...tbl.querySelectorAll("tr")];
  if (rows.length < 2) return defs;

  const headers = [...rows[0].querySelectorAll("th,td")].map(c=>c.innerText.trim());
  let termIdx = headers.findIndex(h => /\b(term|item)\b/i.test(h));
  let defIdx  = headers.findIndex(h => /definition\/?guidance|definition|meaning|glossary|guidance/i.test(h));
  if (termIdx === -1 && headers.includes("Item")) termIdx = headers.indexOf("Item");
  if (defIdx === -1 && headers.includes("Meaning")) defIdx = headers.indexOf("Meaning");
  if (termIdx === -1 || defIdx === -1) return defs;
  rows.slice(1).forEach(r => {
    const cells = [...r.querySelectorAll("th,td")];
    const termCell = cells[termIdx];
    const defCell  = cells[defIdx];
    if (!termCell || !defCell) return;
    const term = termCell.innerText.trim();
    const def  = defCell.innerText.trim();
    if (!term || !def || /^term$/i.test(term) || /^definition$/i.test(def)) return;
    defs[term.toLowerCase()] = def;
  });
  return defs;
}

// wrap or remove definition term highlights
function rehighlight() {
  tooltip.style.display = "none";

  // unwrap existing highlights
  [...contentEl.querySelectorAll("span.def-term")].forEach(span => {
    span.replaceWith(span.textContent);
  });

  if (!toggleHighlightEl.checked) return;

  const terms = Object.keys(definitions);
  if (!terms.length) return;

  const escapeRe = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const pattern = terms
    .sort((a, b) => b.length - a.length)
    .map(escapeRe)
    .join("|");
  const re = new RegExp(`\\b(${pattern})\\b`, "gi");

  const walk = node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const replaced = text.replace(re, m => `<span class="def-term" data-term="${m.toLowerCase()}">${m}</span>`);
      if (replaced !== text) {
        const frag = document.createElement("span");
        frag.innerHTML = replaced;
        node.replaceWith(...frag.childNodes);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (["SCRIPT", "STYLE", "CODE", "PRE"].includes(node.tagName)) return;
      [...node.childNodes].forEach(walk);
    }
  };

  walk(contentEl);
}
