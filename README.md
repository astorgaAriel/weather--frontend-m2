# appClima

Pequeña demostración front-end que muestra un mapa SVG interactivo de regiones y una vista tipo "card" con el clima de varias ciudades por región.

Resumen rápido
- Interacción por clic en el mapa o por menú desplegable: carga una tarjeta con datos de 9 ciudades de la región seleccionada.
- Datos de prueba separados en `assets/js/data.js` (cada región tiene 9 registros).
- Lógica principal en `assets/js/card.js`.

Cómo ejecutar

Opción recomendada — servidor local (requerido para peticiones HTTP/Fetch)

Para desarrollo se recomienda ejecutar un servidor local porque algunas funcionalidades (por ejemplo peticiones `fetch`/AJAX o módulos ES importados) no funcionan correctamente al abrir archivos con el esquema `file://`.

Ejemplos rápidos:

- Live Server (VS Code): instalar la extensión "Live Server" y elegir "Open with Live Server" en el archivo `index.html`.
- Python 3 (desde la raíz del proyecto):

```bash
python -m http.server 5500
# abrir http://localhost:5500
```

- Node (http-server vía npx):

```bash
npx http-server -c-1
# abrir http://localhost:8080 (puerto por defecto)
```

Abrir directamente `index.html` (doble clic) puede funcionar para pruebas básicas de HTML/CSS/imagenes, pero NO es fiable para peticiones HTTP, módulos o características que requieran protocolo `http(s)`.

Seleccionar una región
- Haz clic en el mapa (SVG) o usa el menú "Regiones". La vista desplazará y mostrará la card con las 9 ciudades provistas en los datos.

Buscar
- Usa el campo de búsqueda en la barra superior para localizar regiones por nombre.

Cambios importantes (últimas actualizaciones)
- Los datos de prueba fueron movidos a `assets/js/data.js` para separar datos y lógica.
- El archivo `card.js` ya no genera ciudades dinámicamente: muestra exactamente las 9 ciudades provistas en los datos.
- Se renombró el icono `viento (1).png` a `viento.png` y se actualizó el código para que cargue correctamente las imágenes.
- Mejora de rendimiento: event delegation para manejar clicks en el SVG y limpieza del contenedor antes de renderizar nueva card.

Estructura relevante
- [index.html](index.html) — Entrada de la app y carga de scripts.
- assets/js/data.js — Datos de prueba (`regionesData`).
- assets/js/card.js — Lógica de render y eventos.
- assets/css/style.css — Estilos.
- assets/img/ — Iconos y logo usados por la app.

Notas para desarrolladores
- Para añadir o editar ciudades: modificar `assets/js/data.js` (cada región debe contener 9 objetos ciudad).
- Para cambiar estilos: editar `assets/css/style.css`.
- Si añades nuevos iconos, colócalos en `assets/img/` y usa nombres sin paréntesis ni espacios para evitar problemas de URL.

Contribuciones
- Este es un proyecto personal/educativo. Puedes abrir PRs o sugerir mejoras.

Licencia
- Sin licencia explícita (proyecto personal). Añade una licencia si deseas compartirlo públicamente.
