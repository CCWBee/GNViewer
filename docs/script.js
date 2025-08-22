/* globals marked, DOMPurify */
const listEl = document.getElementById("fileList");
const filterEl = document.getElementById("filter");
const contentEl = document.getElementById("content");

let manifest = [];
let current = null;

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
  contentEl.innerHTML = `<p class="muted">loading <code>${escapeHTML(path)}</code> …</p>`;
  try {
    const md = await fetchText(path);
    const html = DOMPurify.sanitize(marked.parse(md, { mangle:false, headerIds:true }));
    contentEl.innerHTML = html;
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
