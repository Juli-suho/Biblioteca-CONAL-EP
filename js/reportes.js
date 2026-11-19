
/* ==========================================
   REPORTES DE LOS ALUMNOS
   BIBLIOTECA DIGITAL CONALEP
========================================== */

(() => {

  // ==========================================
  // PARÁMETROS DE LA PÁGINA
  // ==========================================

  const parametros = new URLSearchParams(window.location.search);

  const actividad = parametros.get("actividad") || "Act.1";
  const unidad = parametros.get("unidad") || "1.2";

  // ==========================================
  // TEMAS DE CADA ACTIVIDAD
  // ==========================================

  const temas = {
    "Act.1": [
      {
        numero: 2,
        titulo: "La Ilustración y las revoluciones atlánticas"
      },
      {
        numero: 3,
        titulo: "La desigualdad social y la exclusión política"
      },
      {
        numero: 4,
        titulo: "Las Reformas Borbónicas"
      },
      {
        numero: 5,
        titulo: "La conspiración de Querétaro"
      }
    ],

    "Act.2": [
      {
        numero: 2,
        titulo: "La Constitución de 1824"
      },
      {
        numero: 3,
        titulo: "Las Leyes de Reforma"
      },
      {
        numero: 4,
        titulo: "Las constituciones de 1854 y 1857"
      },
      {
        numero: 5,
        titulo: "Tema 5"
      }
    ]
  };

  // ==========================================
  // ELEMENTOS DE LA PÁGINA
  // ==========================================

  const grid = document.querySelector("#reports-grid");

  const listaTemas = temas[actividad];

  // ==========================================
  // COMPROBAR SI EXISTE UN DOCUMENTO
  // ==========================================

  async function comprobarArchivo(ruta) {

    try {

      // Primer intento: método HEAD.
      const respuesta = await fetch(ruta, {
        method: "HEAD",
        cache: "no-store"
      });

      if (respuesta.ok) {
        return true;
      }

      // Segundo intento: método GET.
      const segundoIntento = await fetch(ruta, {
        method: "GET",
        cache: "no-store"
      });

      return segundoIntento.ok;

    } catch (error) {

      console.error(
        "No se pudo comprobar el reporte:",
        ruta,
        error
      );

      return false;
    }
  }

  // ==========================================
  // CARGAR REPORTES
  // ==========================================

  async function cargarReportes() {

    if (!grid) {
      console.error("No se encontró el elemento #reports-grid");
      return;
    }

    // Comprobar que la actividad exista.
    if (!listaTemas) {

      grid.innerHTML = `
        <article class="project-team-card">
          <h3>Actividad no disponible</h3>
          <p>No se encontró la actividad solicitada.</p>
        </article>
      `;

      return;
    }

    // ========================================
    // ENCABEZADOS
    // ========================================

    document.querySelector("#page-title").textContent =
      "Reportes académicos";

    document.querySelector("#page-description").textContent =
      `Documentos elaborados por los alumnos. Actividad ${actividad.replace("Act.", "")}, unidad ${unidad}.`;

    document.querySelector("#section-title").textContent =
      `Reportes ${actividad}`;

    // ========================================
    // CREAR TARJETAS
    // ========================================

    grid.innerHTML = listaTemas.map(tema => `
      <article class="project-team-card">

        <span class="project-team-number">
          TEMA ${String(tema.numero).padStart(2, "0")}
        </span>

        <h3>${tema.titulo}</h3>

        <p>
          Consulta el reporte académico correspondiente a este tema.
        </p>

        <div class="topic-resources">

          <div class="topic-resource">

            <strong>DOCUMENTO WORD</strong>

            <div
              class="topic-buttons"
              id="reporte-${tema.numero}"
            >
              <span class="project-file-pending">
                Comprobando documento...
              </span>
            </div>

          </div>

        </div>

      </article>
    `).join("");

    // ========================================
    // COMPROBAR Y CREAR DESCARGAS
    // ========================================

    for (const tema of listaTemas) {

      const ruta =
        `reportes/${actividad}/tema-${tema.numero}-reporte.docx`;

      const contenedor = document.querySelector(
        `#reporte-${tema.numero}`
      );

      if (!contenedor) {
        console.error(
          "No se encontró el contenedor del reporte:",
          tema.numero
        );
        continue;
      }

      const existe = await comprobarArchivo(ruta);

      if (existe) {

        // Documento disponible.
        contenedor.innerHTML = `
          <a
            href="${ruta}"
            class="project-file-link"
            download
          >
            DESCARGAR REPORTE ↓
          </a>
        `;

      } else {

        // Documento pendiente.
        contenedor.innerHTML = `
          <span class="project-file-pending">
            REPORTE PENDIENTE
          </span>
        `;

        console.warn(
          "Reporte no encontrado:",
          ruta
        );
      }
    }
  }

  // ==========================================
  // INICIAR CUANDO CARGUE EL DOCUMENTO
  // ==========================================

  document.addEventListener(
    "DOMContentLoaded",
    cargarReportes
  );

})();
