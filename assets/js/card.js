const DIAS_SEMANA = ["Dom","Lun","Mar","Mie","Jue","Vier","Sab"];

function getDiaActual() {
  return DIAS_SEMANA[new Date().getDay()];
}

function generarArticles(regionId) {
  const container = document.getElementById("citiesContainer");
  const datos = regionesData[regionId];

  if (!datos) {
    if (container) container.innerHTML = "<p>Región no encontrada</p>";
    return;
  }

  if (container) container.innerHTML = "";

  const article = document.createElement("article");
  article.className = "region-article";

  const header = document.createElement("div");
  header.className = "region-article__header";
  header.textContent = datos.nombre;
  article.appendChild(header);

  const content = document.createElement("div");
  content.className = "region-article__content";

  const citiesDiv = document.createElement("div");
  citiesDiv.className = "region-article__cities";

  const diaHoy = getDiaActual();

  datos.ciudades.forEach((ciudad) => {
    const card = document.createElement("div");
    card.className = "city-card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "city-card__header";

    const nombre = document.createElement("div");
    nombre.className = "city-card__name";
    nombre.textContent = ciudad.nombre;

    const diaLabel = document.createElement("div");
    diaLabel.className = "city-card__day";
    diaLabel.textContent = `Hoy, ${diaHoy}`;

    const condicion = document.createElement("div");
    condicion.className = "city-card__condition";

    const iconoCondicion = document.createElement("img");
    iconoCondicion.className = "city-card__condition-icon";
    iconoCondicion.src = `./assets/img/${ciudad.icono}`;
    iconoCondicion.alt = ciudad.condicion;
    iconoCondicion.style.width = "30px";
    iconoCondicion.style.height = "30px";

    const textoCondicion = document.createElement("span");
    textoCondicion.textContent = ciudad.condicion;

    condicion.appendChild(iconoCondicion);
    condicion.appendChild(textoCondicion);

    cardHeader.appendChild(nombre);
    cardHeader.appendChild(condicion);
    card.appendChild(cardHeader);
    card.appendChild(diaLabel);

    const weather = document.createElement("div");
    weather.className = "city-card__weather";

    weather.appendChild(crearWeatherInfo("temp.png",   "Temperatura", `${ciudad.temp}°C`));
    weather.appendChild(crearWeatherInfo("viento.png", "Viento",      `${ciudad.viento} km/h`));
    weather.appendChild(crearWeatherInfo("gota.png",   "Humedad",     `${ciudad.humedad}%`));

    card.appendChild(weather);

        if (ciudad.semana && ciudad.semana.length > 0) {
      const temps = ciudad.semana.map((d) => d.tempMax);
      const maxSem = Math.max(...temps);
      const minSem = Math.min(...temps);
      const promSem = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);

      const statsDiv = document.createElement("div");
      statsDiv.className = "city-card__stats";

      const statsData = [
        { label: "Máx semana", value: `${maxSem}°C` },
        { label: "Promedio",   value: `${promSem}°C` },
        { label: "Mín semana", value: `${minSem}°C` },
      ];

      statsData.forEach(({ label, value }) => {
        const item = document.createElement("div");
        item.className = "city-card__stat-item";

        const lbl = document.createElement("span");
        lbl.className = "city-card__stat-label";
        lbl.textContent = label;

        const val = document.createElement("span");
        val.className = "city-card__stat-value";
        val.textContent = value;

        item.appendChild(lbl);
        item.appendChild(val);
        statsDiv.appendChild(item);
      });

      card.appendChild(statsDiv);

 
      const semanaDiv = document.createElement("div");
      semanaDiv.className = "city-card__week";

      ciudad.semana
        .filter((item) => item.dia !== diaHoy)
        .forEach((item) => {
          const diaDiv = document.createElement("div");
          diaDiv.className = "city-card__week-day";

          const diaName = document.createElement("span");
          diaName.className = "city-card__week-day-name";
          diaName.textContent = item.dia;

          const diaIcon = document.createElement("img");
          diaIcon.className = "city-card__week-day-icon";
          diaIcon.src = `./assets/img/${item.icono}`;
          diaIcon.alt = item.dia;
          diaIcon.style.width = "24px";
          diaIcon.style.height = "24px";

          const diaTemp = document.createElement("span");
          diaTemp.className = "city-card__week-day-temp";
          diaTemp.textContent = `${item.tempMax}°`;

          diaDiv.appendChild(diaName);
          diaDiv.appendChild(diaIcon);
          diaDiv.appendChild(diaTemp);
          semanaDiv.appendChild(diaDiv);
        });

      card.appendChild(semanaDiv);
    }

    citiesDiv.appendChild(card);
  });

  content.appendChild(citiesDiv);
  article.appendChild(content);
  container.appendChild(article);
}

function crearWeatherInfo(icon, label, value) {
  const div = document.createElement("div");
  div.className = "weather-info";

  const img = document.createElement("img");
  img.className = "weather-info__icon";
  img.src = `./assets/img/${icon}`;
  img.alt = label;

  const labelDiv = document.createElement("div");
  labelDiv.className = "weather-info__label";
  labelDiv.textContent = label;

  const valueDiv = document.createElement("div");
  valueDiv.className = "weather-info__value";
  valueDiv.textContent = value;

  div.appendChild(img);
  div.appendChild(labelDiv);
  div.appendChild(valueDiv);

  return div;
}

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("mapa");
  const paths = document.querySelectorAll("#mapa path");

  function seleccionarRegion(path) {
    const id = path.getAttribute("id");
    generarArticles(id);

    document.querySelectorAll("#mapa path.active")
      .forEach((p) => p.classList.remove("active"));
    path.classList.add("active");

    document.getElementById("citiesContainer")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll(".dropdown-item[data-region]").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = item.getAttribute("data-region");
      const path = document.querySelector(`#mapa path[id="${id}"]`);
      if (path) seleccionarRegion(path);
    });
  });

  if (svg) {
    svg.addEventListener("click", function(e) {
      const path = e.target.closest("path");
      if (path && path.hasAttribute("id")) {
        e.stopPropagation();
        seleccionarRegion(path);
      }
    });
    paths.forEach((path) => { path.style.pointerEvents = "auto"; });
  }

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
    } else {
      alert("Región no encontrada: " + input.value);
    }
    input.value = "";
  });

  const regionDefault = document.querySelector('#mapa path[id="CLRM"]');
  if (regionDefault) seleccionarRegion(regionDefault);
});