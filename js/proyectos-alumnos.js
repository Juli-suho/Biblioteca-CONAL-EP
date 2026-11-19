
/* ==========================================
   PRESENTACIONES DE LOS ALUMNOS
   BIBLIOTECA DIGITAL CONALEP
========================================== */

(() => {

  // PARÁMETROS DE LA PÁGINA
  const parametros = new URLSearchParams(window.location.search);
  const actividad = parametros.get("actividad") || "Act.1";
  const unidad = parametros.get("unidad") || "1.1";

  // TEMAS DE CADA ACTIVIDAD
  const temas = {
    "Act.1": [
      {
        numero: 2,
        titulo: "La Ilustración y las revoluciones atlánticas",
        descripcion: "Antecedentes ideológicos de la Independencia de México."
      },
      {
        numero: 3,
        titulo: "La desigualdad social y la exclusión política",
        descripcion: "Las diferencias sociales y políticas en la Nueva España."
      },
      {
        numero: 4,
        titulo: "Las Reformas Borbónicas",
        descripcion: "Cambios políticos, económicos y fiscales."
      },
      {
        numero: 5,
        titulo: "La conspiración de Querétaro",
        descripcion: "Antecedentes del inicio de la lucha insurgente."
      }
    ],

    "Act.2": [
      {
        numero: 2,
        titulo: "La Constitución de 1824",
        descripcion: "El primer ensayo federal de México."
      },
      {
        numero: 3,
        titulo: "Las Leyes de Reforma",
        descripcion: "Las transformaciones políticas y sociales del siglo XIX."
      },
      {
        numero: 4,
        titulo: "La Constitución de 1857",
        descripcion: "La organización constitucional de México."
      },
      {
        numero: 5,
        titulo: "Tema 5",
        descripcion: "Presentación correspondiente al tema cinco."
      }
    ]
  };

  // ELEMENTOS DE LA PÁGINA
  const grid = document.querySelector("#projects-grid");

  // COMPROBAR EXISTENCIA DEL ARCHIVO
  async function existeArchivo(ruta) {
    try {
      const respuesta = await fetch(ruta, {
        method: "HEAD",
        cache: "no-store"
      });

      if (respuesta.ok) return true;

      const segundoIntento = await fetch(ruta, {
        method: "GET",
        cache: "no-store"
      });

      return segundoIntento.ok;

    } catch (error) {
      console.error("Error al comprobar presentación:", ruta, error);
      return false;
    }
  }

  // CARGAR PRESENTACIONES
  async function cargarPresentaciones() {

    if (!grid) {
      console.error("No se encontró #projects-grid");
      return;
    }

    const lista = temas[actividad];

    if (!lista) {
      grid.innerHTML = `
        <article class="project-team-card">
          <h3>Actividad no disponible</h3>
          <p>No se encontró la actividad solicitada.</p>
        </article>
      `;
      return;
    }

    // ENCABEZADOS
    document.querySelector("#page-title").textContent =
      "Presentaciones académicas";

    document.querySelector("#page-description").textContent =
      `Actividad ${actividad.replace("Act.", "")} · Unidad ${unidad}`;

    document.querySelector("#section-title").textContent =
      `Presentaciones ${actividad}`;

    // CREAR TARJETAS
    grid.innerHTML = lista.map(tema => `
      <article class="project-team-card">

        <span class="project-team-number">
          TEMA ${String(tema.numero).padStart(2, "0")}
        </span>

        <h3>${tema.titulo}</h3>

        <p>${tema.descripcion}</p>

        <div class="topic-resources">
          <div class="topic-resource">

            <strong>PRESENTACIÓN POWERPOINT</strong>

            <div
              class="topic-buttons"
              id="presentacion-${tema.numero}"
            >
              <span class="project-file-pending">
                Comprobando archivo...
              </span>
            </div>

          </div>
        </div>

      </article>
    `).join("");

    // COMPROBAR ARCHIVOS Y CREAR ENLACES
    for (const tema of lista) {

      const ruta =
        `proyectos/${actividad}/tema-${tema.numero}-presentacion.pptx`;

      const contenedor = document.querySelector(
        `#presentacion-${tema.numero}`
      );

      if (!contenedor) continue;

      const existe = await existeArchivo(ruta);

      if (existe) {

        contenedor.innerHTML = `
          <a
            href="${ruta}"
            class="project-file-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABRIR PRESENTACIÓN →
          </a>

          <a
            href="${ruta}"
            class="project-file-link"
            download
          >
            DESCARGAR PPTX ↓
          </a>
        `;

      } else {

        contenedor.innerHTML = `
          <span class="project-file-pending">
            PRESENTACIÓN PENDIENTE
          </span>
        `;

        console.warn("Archivo no encontrado:", ruta);
      }
    }
  }

  // INICIAR
  document.addEventListener(
    "DOMContentLoaded",
    cargarPresentaciones
  );

})();
