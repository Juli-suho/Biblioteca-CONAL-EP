
/* ==========================================
   REPORTES DE LOS ALUMNOS
   BIBLIOTECA DIGITAL CONALEP
========================================== */

(() => {

  // PARÁMETROS DE LA PÁGINA

  const parametros = new URLSearchParams(window.location.search);

  const actividad = parametros.get("actividad") || "Act.1";
  const unidad = parametros.get("unidad") || "1.2";

  // TEMAS DE CADA ACTIVIDAD

  const temas = {

    "Act.1": [
      {
        numero: 2,
        titulo: "La Ilustración y las revoluciones atlánticas",
        portada: "recursos/portadas/tema-2-ilustracion-revoluciones-atlanticas.png"
      },
      {
        numero: 3,
        titulo: "La desigualdad social y la exclusión política",
        portada: "recursos/portadas/tema-3-desigualdad-social-nueva-espana.png"
      },
      {
        numero: 4,
        titulo: "Las Reformas Borbónicas",
        portada: "recursos/portadas/tema-4-reformas-borbonicas.png"
      },
      {
        numero: 5,
        titulo: "La conspiración de Querétaro",
        portada: "recursos/portadas/tema-5-conspiracion-queretaro.png"
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

  // ELEMENTOS DE LA PÁGINA

  const grid = document.querySelector("#reports-grid");

  const listaTemas = temas[actividad];

  // COMPROBAR SI EXISTE UN DOCUMENTO

  async function comprobarArchivo(ruta) {

    try {

      const respuesta = await fetch(ruta, {
        method: "HEAD",
        cache: "no-store"
      });

      if (respuesta.ok) {
        return true;
      }

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

  // CARGAR REPORTES

  async function cargarReportes() {

    if (!grid) {
      console.error("No se encontró el elemento #reports-grid");
      return;
    }

    if (!listaTemas) {

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
      pageTitle.textContent = "Reportes académicos";
    }

    if (pageDescription) {
      pageDescription.textContent =
        `Documentos elaborados por los alumnos. Actividad ${actividad.replace("Act.", "")}, unidad ${unidad}.`;
    }

    if (sectionTitle) {
      sectionTitle.textContent = `Reportes ${actividad}`;
    }

    // CREAR TARJETAS

    grid.innerHTML = listaTemas.map(tema => `

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

    // COMPROBAR Y CREAR BOTONES

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

        // DIRECCIÓN DEL LECTOR WORD

        const parametrosLectura = new URLSearchParams({
          archivo: ruta,
          actividad: actividad,
          unidad: unidad
        });

        const urlLectura =
          `leer-word.html?${parametrosLectura.toString()}`;

        // BOTONES DE LECTURA Y DESCARGA

        contenedor.innerHTML = `

          <a
            href="${urlLectura}"
            class="project-file-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leer reporte del tema ${tema.numero}"
          >
            LEER DOCUMENTO ↗
          </a>

          <a
            href="${ruta}"
            class="project-file-link"
            download
            aria-label="Descargar reporte del tema ${tema.numero}"
          >
            DESCARGAR REPORTE ↓
          </a>

        `;

      } else {

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

  // INICIAR CUANDO CARGUE EL DOCUMENTO

  document.addEventListener(
    "DOMContentLoaded",
    cargarReportes
  );

})();
