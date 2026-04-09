const paths = document.querySelectorAll("#mapa path");
const preview = document.getElementById("preview");
const region = document.getElementById("cardTitle");


paths.forEach(path => {
  path.addEventListener("click", () => {

    const bbox = path.getBBox();

    preview.innerHTML = "";

    // Ajusta el viewBox al tamaño exacto del path
    preview.setAttribute(
      "viewBox",
      `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
    );

    preview.appendChild(path.cloneNode(true));
    const nombreRegion = path.getAttribute("name");
    region.textContent = nombreRegion;
  });
});