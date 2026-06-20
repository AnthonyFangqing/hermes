/* Sub-nexus table renderer */
function renderSubnexus(items) {
  const tbody = document.getElementById("subproject-body");
  if (!tbody) return;

  tbody.innerHTML = items.map(p => `
    <tr class="status-${p.status}" onclick="location.href='${p.url}'">
      <td>${p.id}</td>
      <td><a href="${p.url}">${p.title}</a></td>
      <td>${p.tags}</td>
      <td>${p.updated}</td>
      <td>${p.status}</td>
    </tr>
  `).join("");
}
