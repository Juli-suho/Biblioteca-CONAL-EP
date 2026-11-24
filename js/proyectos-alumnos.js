
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
        descripcion: "Antecedentes ideológicos de la Independencia de México.",
        portada: "recursos/portadas/tema-2-ilustracion-revoluciones-atlanticas.png"
      },
      {
        numero: 3,
        titulo: "La desigualdad social y la exclusión política",
        descripcion: "Las diferencias sociales y políticas en la Nueva España.",
        portada: "recursos/portadas/tema-3-desigualdad-social-nueva-espana.png"
      },
      {
        numero: 4,
        titulo: "Las Reformas Borbónicas",
        descripcion: "Cambios políticos, económicos y fiscales.",
        portada: "recursos/portadas/tema-4-reformas-borbonicas.png"
      },
      {
        numero: 5,
        titulo: "La conspiración de Querétaro",
        descripcion: "Antecedentes del inicio de la lucha insurgente.",
        portada: "recursos/portadas/tema-5-conspiracion-queretaro.png"
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

      console.error(
        "Error al comprobar presentación:",
        ruta,
        error
      );

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

    const pageTitle = document.querySelector("#page-title");
    const pageDescription = document.querySelector("#page-description");
    const sectionTitle = document.querySelector("#section-title");

    if (pageTitle) {
      pageTitle.textContent = "Presentaciones académicas";
    }

    if (pageDescription) {
      pageDescription.textContent =
        `Actividad ${actividad.replace("Act.", "")} · Unidad ${unidad}`;
    }

    if (sectionTitle) {
      sectionTitle.textContent = `Presentaciones ${actividad}`;
    }

    // CREAR TARJETAS

    grid.innerHTML = lista.map(tema => `

      <article class="project-team-card">

        ${tema.portada ? `
          <div class="topic-cover">
            <img
              src="${tema.portada}"
              alt="Portada del tema ${tema.numero}: ${tema.titulo}"
              loading="lazy"
            >
          </div>
        ` : ""}

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

          ${tema.numero === 3 ? `
            <div class="topic-resource">

              <strong>MATERIAL AUDIOVISUAL</strong>

              <div class="topic-buttons">

                <a
                  href="material-visual.html?actividad=${encodeURIComponent(actividad)}&unidad=${encodeURIComponent(unidad)}&tema=3"
                  class="project-file-link visual-material-link"
                  aria-label="Ver material visual del tema 3, ${actividad}"
                >
                  🎬 VER MATERIAL VISUAL
                </a>

              </div>

            </div>
          ` : ""}

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
            aria-label="Abrir presentación del tema ${tema.numero}"
          >
            ABRIR PRESENTACIÓN →
          </a>

          <a
            href="${ruta}"
            class="project-file-link"
            download
            aria-label="Descargar presentación del tema ${tema.numero}"
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

        console.warn(
          "Archivo no encontrado:",
          ruta
        );
      }
    }
  }

  // INICIAR

  document.addEventListener(
    "DOMContentLoaded",
    cargarPresentaciones
  );

})();
