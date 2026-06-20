/* Nexus: table-based, data-driven index */

const projects = [
  {
    id: "project1",
    title: "Deployable Site",
    status: "active",
    tags: ["fastapi", "frontend", "devops"],
    desc: "FastAPI backend, plain HTML/CSS/JS frontend. No build step.",
    updated: "2026-06-20",
    path: "projects/project1/",
  },
  {
    id: "project2",
    title: "Discord Gateway Config",
    status: "active",
    tags: ["discord", "hermes", "infra"],
    desc: "Making the bot reply without @mentions in some channels.",
    updated: "2026-06-19",
    path: "projects/project2/",
  },
  {
    id: "china-trip",
    title: "China Trip",
    status: "active",
    tags: ["travel", "planning", "personal"],
    desc: "Going to China. These pages track prep and plans.",
    updated: "2026-06-19",
    path: "projects/china-trip/",
  },
];

function render() {
  const tbody = document.getElementById("table-body");
  const count = document.getElementById("count");
  if (!tbody) return;

  count.textContent = projects.length + " entries";

  tbody.innerHTML = projects.map(p => `
    <tr class="status-${p.status}" onclick="location.href='${p.path}'">
      <td>${p.id}</td>
      <td><a href="${p.path}">${p.title}</a></td>
      <td>${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</td>
      <td>${p.updated}</td>
      <td>${p.status}</td>
    </tr>
  `).join("");
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
