/* globals marked, DOMPurify */
const listEl = document.getElementById("fileList");
const filterEl = document.getElementById("filter");
const contentEl = document.getElementById("content");
const defsCountEl = document.getElementById("defsCount");
const toggleHighlightEl = document.getElementById("toggleHighlight");
const tooltip = document.getElementById("tooltip");

let manifest = [];
let currentPath = null;
let definitions = {};   // term -> definition

init();

async function init() {
  try {
    manifest = await fetchJSON("manifest.json");
    renderList(manifest);
    attachUI();
    // auto-open first file
    if (manifest.length) loadFile(manifest[0].path);
  } catch (e) {
    contentEl.innerHTML = `<p style="color:#ff8383">Failed to load manifest.json; make sure it exists in /docs.</p>`;
    console.error(e);
  }
}

function attachUI() {
  filterEl.addEventListener("input", () => {
    const q = filterEl.value.trim().toLowerCase();
    const filtered = manifest.filter(m => m.title.toLowerCase().includes(q) || m.path.toLowerCase().includes(q));
    renderList(filtered);
  });
  toggleHighlightEl.addEventListener("change", () => {
    if (currentPath) rehighlight();
  });
  window.addEventListener("scroll", onScrollHideTooltip, { passive: true });
  window.addEventListener("resize", onScrollHideTooltip, { passive: true });
}

function renderList(items) {
  listEl.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = item.title || item.path.split("/").pop();
    btn.title = item.path;
    btn.addEventListener("click", () => {
      [...listEl.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadFile(item.path);
    });
    // mark active
    if (item.path === currentPath) btn.classList.add("active");
    li.appendChild(btn);
    listEl.appendChild(li);
  }
}

async function loadFile(path) {
  currentPath = path;
  defsCountEl.textContent = "";
  definitions = {};
  tooltip.style.display = "none";
  contentEl.innerHTML = `<p class="muted">Loading <code>${escapeHTML(path)}</code> …</p>`;
  try {
    const md = await fetchText(path);
    const html = DOMPurify.sanitize(marked.parse(md, { mangle: false, headerIds: true }));
    contentEl.innerHTML = html;
    definitions = extractDefinitions(contentEl);
    const count = Object.keys(definitions).length;
    defsCountEl.textContent = count ? `${count} definitions found` : "no definitions found";
    if (toggleHighlightEl.checked && count) highlightTerms();
  } catch (e) {
    contentEl.innerHTML = `<p style="color:#ff8383">Failed to load ${escapeHTML(path)}</p>`;
    console.error(e);
  }
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function fetchJSON(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.json();
}
async function fetchText(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.text();
}

/* -------- glossary/definitions extraction --------
   Strategy:
   - find heading h1..h6 whose text contains "definition" or "glossary"
   - take the next <table> after that heading
   - header detection:
       term column = first header containing term|item
       definition column = header containing definition|meaning|glossary|definition/guidance|guidance
     fallback: if table has exactly 2 columns, use 0,1
*/
function extractDefinitions(root) {
  const defs = {};
  const headingSel = "h1,h2,h3,h4,h5,h6";
  const heads = [...root.querySelectorAll(headingSel)];
  const hit = heads.find(h => /definition|glossary/i.test(h.textContent));
  let tbl = null;
  if (hit) {
    // the next table in the DOM order after the heading
    tbl = nextTableAfter(hit);
  }
  // fallback, any table whose header contains "definition"
  if (!tbl) {
    tbl = [...root.querySelectorAll("table")].find(t => {
      const first = t.querySelector("tr");
      return first && /definition|glossary/i.test(first.textContent);
    });
  }
  if (!tbl) return defs;

  const rows = [...tbl.querySelectorAll("tr")];
  if (rows.length < 2) return defs;
  const headerCells = [...rows[0].querySelectorAll("th,td")].map(cellText);
  let termIdx = headerCells.findIndex(h => /\b(term|item)\b/i.test(h));
  let defIdx  = headerCells.findIndex(h => /definition\/?guidance|definition|meaning|glossary|guidance/i.test(h));

  // handle the common "Ref | Item | FSB | IB | TCB | Definition/Guidance"
  if (termIdx === -1 && headerCells.includes("Item")) termIdx = headerCells.indexOf("Item");
  if (defIdx === -1 && headerCells.includes("Definition/Guidance")) defIdx = headerCells.indexOf("Definition/Guidance");

  // fallback two-column
  if (termIdx === -1 || defIdx === -1) {
    const colCount = Math.max(...rows.map(r => r.children.length));
    if (colCount === 2) { termIdx = 0; defIdx = 1; }
  }
  if (termIdx === -1 || defIdx === -1) return defs;

  for (let i = 1; i < rows.length; i++) {
    const cells = [...rows[i].children].map(cellText);
    if (!cells.length) continue;
    const term = (cells[termIdx] || "").trim();
    const def  = (cells[defIdx]  || "").trim();
    if (!term || !def) continue;
    const key = term.toLowerCase();
    if (!defs[key]) defs[key] = def;
  }
  return defs;
}

function nextTableAfter(el) {
  let n = el.nextElementSibling;
  while (n && n.tagName.toLowerCase() !== "table") n = n.nextElementSibling;
  return n;
}
function cellText(td) {
  // keep innerText to collapse odd whitespace
  return td ? td.innerText.replace(/\s+/g, " ").trim() : "";
}

/* -------- highlighter -------- */

function rehighlight() {
  // remove previous highlights
  contentEl.querySelectorAll("span.def-term").forEach(sp => {
    const text = document.createTextNode(sp.textContent);
    sp.replaceWith(text);
  });
  tooltip.style.display = "none";
  if (toggleHighlightEl.checked && Object.keys(definitions).length) highlightTerms();
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms() {
  const terms = Object.keys(definitions);
  if (!terms.length) return;

  // sort longest first to avoid splitting longer phrases
  const sorted = terms.sort((a, b) => b.length - a.length).map(t => escapeRegExp(t));
  const pattern = new RegExp(`\\b(${sorted.join("|")})\\b`, "gi");

  const walker = document.createTreeWalker(
    contentEl,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest("a, code, pre, h1, h2, h3, h4, h5, h6, table")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const toProcess = [];
  let n;
  while ((n = walker.nextNode())) toProcess.push(n);

  for (const node of toProcess) {
    const text = node.textContent;
    pattern.lastIndex = 0;
    let match, last = 0;
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
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    if (frag.childNodes.length) node.parentNode.replaceChild(frag, node);
  }
}

function showTooltip(e) {
  tooltip.textContent = e.currentTarget.dataset.definition || "";
  tooltip.style.display = "block";
  const rect = e.currentTarget.getBoundingClientRect();
  tooltip.style.top = `${window.scrollY + rect.bottom + 6}px`;
  tooltip.style.left = `${window.scrollX + rect.left}px`;
}
function hideTooltip() { tooltip.style.display = "none"; }
function onScrollHideTooltip() { hideTooltip(); }
