/* globals marked, DOMPurify */
const listEl = document.getElementById("fileList");
const filterEl = document.getElementById("filter");
const contentEl = document.getElementById("content");

let manifest = [];
let current = null;
let definitions = {};

const tooltip = document.createElement("div");
tooltip.className = "definition-tooltip";
document.body.appendChild(tooltip);

init();

async function init() {
  try {
    // load list of files
    manifest = await fetchFile("manifest.json", "json");
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
    const path = item.path;
    btn.textContent = item.title || path.split("/").pop();
    btn.title = path;
    btn.dataset.path = path;
    btn.className = (current === path) ? "active" : "";
    btn.addEventListener("click", e => {
      const p = e.currentTarget.dataset.path;
      current = p;
      [...listEl.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      openFile(p);
      const url = new URL(location.href);
      url.searchParams.set("src", p);
      history.replaceState(null, "", url.toString());
    });
    li.appendChild(btn);
    listEl.appendChild(li);
  }
}

async function openFile(path) {
  contentEl.innerHTML = `<p class="muted">loading <code>${escapeHTML(path)}</code> …</p>`;
  try {
    const md = await fetchFile(path, "text");
    definitions = parseDefinitions(md);
    const html = DOMPurify.sanitize(marked.parse(md, { mangle:false, headerIds:true }));
    contentEl.innerHTML = html;
    highlightTerms();
  } catch (e) {
    contentEl.innerHTML = `<p style="color:#ff8383">failed to load <code>${escapeHTML(path)}</code></p>`;
    console.error(e);
  }
}

function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
async function fetchFile(u, type = "json"){
  const tries = [u];
  if (!u.startsWith("docs/")) tries.push(`docs/${u}`);
  let lastErr;
  for (const t of tries) {
    try {
      const r = await fetch(t,{cache:"no-store"});
      if (r.ok) {
        if (type === "text") return await r.text();
        return await r.json();
      }
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error(`failed to fetch ${u}`);
}

function parseDefinitions(md) {
  const defs = {};
  md = md.replace(/\r\n/g, "\n");

  const refRe = /^\[([^\]]+)\]:\s+(.+)$/gm;
  let m;
  while ((m = refRe.exec(md))) {
    defs[m[1].trim().toLowerCase()] = m[2].trim();
  }

  const secRe = /^##\s+(?:\d+\s+)?(?:Definitions|Glossary(?:\s+of\s+Terms)?)\s*$/gim;
  let match;
  while ((match = secRe.exec(md))) {
    const start = match.index + match[0].length;
    const rest = md.slice(start);
    const next = rest.search(/\n##\s+/);
    const block = rest.slice(0, next === -1 ? rest.length : next);

    block.split(/\n/).forEach(line => {
      const mLine = line.match(/\*\*(.+?)\*\*\s*[-–—:]\s*(.+)/);
      if (mLine) {
        defs[mLine[1].trim().toLowerCase()] = mLine[2].trim();
      }
    });

    const rowRe = /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/gm;
    let row;
    while ((row = rowRe.exec(block))) {
      const term = row[1].trim();
      const def = row[2].trim();
      if (!term || /^term$/i.test(term) || /^[-\s]+$/.test(term)) continue;
      if (!def || /^definition$/i.test(def) || /^[-\s]+$/.test(def)) continue;
      defs[term.toLowerCase()] = def;
    }
  }

  return defs;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms() {
  const terms = Object.keys(definitions);
  if (!terms.length) return;

  const sorted = terms.sort((a, b) => b.length - a.length)
    .map(t => escapeRegExp(t));
  const pattern = new RegExp(`\\b(${sorted.join("|")})\\b`, "gi");

  const walker = document.createTreeWalker(
    document.getElementById("content"),
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest("a, code, pre")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const toProcess = [];
  let n;
  while ((n = walker.nextNode())) toProcess.push(n);

  toProcess.forEach(node => {
    const text = node.textContent;
    pattern.lastIndex = 0;
    let match;
    let last = 0;
    const frag = document.createDocumentFragment();

    while ((match = pattern.exec(text))) {
      const term = match[0];
      if (match.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, match.index)));
      }
      const span = document.createElement("span");
      span.className = "def-term";
      span.textContent = term;
      span.dataset.definition = definitions[term.toLowerCase()];
      span.addEventListener("mouseenter", showTooltip);
      span.addEventListener("mouseleave", hideTooltip);
      frag.appendChild(span);
      last = match.index + term.length;
    }
    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    if (frag.childNodes.length) {
      node.parentNode.replaceChild(frag, node);
    }
  });
}

function showTooltip(e) {
  tooltip.textContent = e.currentTarget.dataset.definition;
  tooltip.style.display = "block";
  const rect = e.currentTarget.getBoundingClientRect();
  tooltip.style.top = `${window.scrollY + rect.bottom + 5}px`;
  tooltip.style.left = `${window.scrollX + rect.left}px`;
}

function hideTooltip() {
  tooltip.style.display = "none";
}
