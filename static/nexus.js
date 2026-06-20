/* Nexus data & renderer */

const projects = [
  {
    id: "project1",
    title: "Deployable Site",
    status: "active",
    tags: ["fastapi", "frontend", "devops"],
    desc: "A production-ready starter with FastAPI backend and modern dark-themed frontend. Deploys to Railway, Render, or Fly.io.",
    updated: "2026-06-20",
    path: "projects/project1/",
  },
  {
    id: "project2",
    title: "Discord Gateway Config",
    status: "active",
    tags: ["discord", "hermes", "infra"],
    desc: "Free-response channel setup for Hermes agent on Discord. Covers mention rules, auto-threading, and permission flow.",
    updated: "2026-06-19",
    path: "projects/project2/",
  },
];

const archive = [
  // { title: "Old Project", date: "2026-06-01", path: "projects/old/" },
];

function render() {
  const grid = document.getElementById("project-grid");
  const list = document.getElementById("archive-list");
  const activeCount = document.getElementById("active-count");

  activeCount.textContent = projects.length;

  grid.innerHTML = projects.map(p => `
    <div class="card" onclick="location.href='${p.path}'">
      <div class="card-header">
        <span class="card-title">${p.title}</span>
        <span class="card-status status-${p.status}"></span>
      </div>
      <div class="card-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-meta">
        <span>Updated ${p.updated}</span>
        <span>→</span>
      </div>
    </div>
  `).join("");

  if (archive.length === 0) {
    list.innerHTML = `<li class="archive-item" style="color:var(--text-dim)">Nothing archived yet.</li>`;
  } else {
    list.innerHTML = archive.map(a => `
      <li class="archive-item">
        <a href="${a.path}">${a.title}</a>
        <span class="date">${a.date}</span>
      </li>
    `).join("");
  }
}

function tick() {
  const el = document.getElementById("now");
  if (!el) return;
  const d = new Date();
  el.textContent = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  tick();
  setInterval(tick, 60000);
});
