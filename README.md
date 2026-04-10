# appClima

Pequeña aplicación web que muestra un mapa SVG de regiones y una card previa con el SVG de la región seleccionada.

**Características**
- Mapa SVG interactivo con varias regiones (`<path name="...">`).
- Click en una región: muestra la forma en la `card` y actualiza el título.
- Buscador en la barra superior que permite localizar regiones por su `name` (insensible a mayúsculas y coincidencias parciales).

**Estructura del proyecto**
- `index.html` — página principal con el mapa y la interfaz.
- `assets/css/style.css` — estilos.
- `assets/js/card.js` — lógica para mostrar la card y buscar regiones.
- `assets/img/` — imágenes (logo, etc.).

**Cómo usar (local)**
1. Abrir `index.html` en un navegador moderno (no requiere servidor):
   - En Windows, doble clic sobre `index.html` o ejecutar desde VS Code: "Open with Live Server" si lo prefieres.
2. Para buscar una región, usa el campo de búsqueda en la barra superior y escribe el nombre (por ejemplo: `Antofagasta`).
   - Si hay coincidencia, la región se selecciona y la card se actualiza con su SVG y nombre.

**Notas para desarrolladores**
- Los nombres de región están en el atributo `name` de cada `<path>` dentro del SVG (`#mapa`).
- La lógica principal está en `assets/js/card.js`: el código añade `click` a cada `path` y un `submit` para el formulario de búsqueda.
- Para cambiar el comportamiento de búsqueda (ej. coincidencia exacta), edita la condición en `card.js`.

**Estilos**
- Puedes añadir una clase para resaltar la región seleccionada; por ejemplo, en `assets/css/style.css`:

```css
#mapa path.selected { stroke: #ffcc00; stroke-width:1.5; fill:#9bd3a6; }
```

**Contribuciones**
- Abrir un issue o enviar un pull request con mejoras.

**Licencia**
- Proyecto personal / educativo. Añade una licencia si quieres compartirlo públicamente.

**Repositorio**
- Código fuente y remoto: https://github.com/astorgaAriel/weather--frontend-m2
