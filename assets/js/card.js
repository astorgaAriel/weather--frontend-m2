document.addEventListener("DOMContentLoaded", () => {
  const paths = document.querySelectorAll("#mapa path");
  const preview = document.getElementById("preview");
const region = document.getElementById("cardTitle");

  function seleccionarRegion(path) {
    const bbox = path.getBBox();
    preview.innerHTML = "";
    preview.setAttribute(
      "viewBox",
      `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
    );
    preview.appendChild(path.cloneNode(true));
    const nombreRegion = path.getAttribute("name");
    region.textContent = nombreRegion;
    document
      .querySelectorAll("#mapa path.selected")
      .forEach((p) => p.classList.remove("selected"));
    path.classList.add("selected");
  }
  document.querySelectorAll(".dropdown-item[data-region]").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = item.getAttribute("data-region");
      const path = document.querySelector(`#mapa path[id="${id}"]`);
      if (path) {
        seleccionarRegion(path);

        document
          .getElementById("cardRegion")
          .scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Región no encontrada en el mapa: " + id);
      }
    });
  });

  paths.forEach((path) => {
    path.addEventListener("click", () => seleccionarRegion(path));
  });

  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim().toLowerCase();
    if (!q) return;

    let found = null;
    paths.forEach((path) => {
      const name = (path.getAttribute("name") || "").toLowerCase();
      if (name === q || name.includes(q)) found = path;
    });

    if (found) {
      seleccionarRegion(found);
      found.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("Región no encontrada: " + input.value);
    }
  });
  const regionDefault = document.querySelector('#mapa path[id="CLRM"]');
  if (regionDefault) {
    seleccionarRegion(regionDefault);
  }
});
