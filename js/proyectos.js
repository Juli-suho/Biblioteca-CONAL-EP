
/* =========================================
   PROYECTOS DE LA UNIDAD 1.1
   INDEPENDENCIA DE MÉXICO
========================================= */

const topics = [
  {
    number: 1,
    title: "La crisis de la monarquía española y su relación con el inicio de la insurgencia",
    pdf: "proyectos/unidad-1-1/tema-1-crisis-monarquia-espanola.pdf",
    pptx: "proyectos/unidad-1-1/tema-1-crisis-monarquia-espanola.pptx"
  },
  {
    number: 2,
    title: "La Ilustración y las revoluciones atlánticas como antecedentes ideológicos",
    pdf: "proyectos/unidad-1-1/tema-2-ilustracion-revoluciones-atlanticas.pdf",
    pptx: "proyectos/unidad-1-1/tema-2-ilustracion-revoluciones-atlanticas.pptx"
  },
  {
    number: 3,
    title: "La desigualdad social y exclusión política en la Nueva España",
    pdf: "proyectos/unidad-1-1/tema-3-desigualdad-social-nueva-espana.pdf",
    pptx: "proyectos/unidad-1-1/tema-3-desigualdad-social-nueva-espana.pptx"
  },
  {
    number: 4,
    title: "Reformas Borbónicas, presión fiscal y monopolio comercial",
    pdf: "proyectos/unidad-1-1/tema-4-reformas-borbonicas.pdf",
    pptx: "proyectos/unidad-1-1/tema-4-reformas-borbonicas.pptx"
  },
  {
    number: 5,
    title: "La conspiración de Querétaro y el inicio de la lucha insurgente",
    pdf: "proyectos/unidad-1-1/tema-5-conspiracion-queretaro.pdf",
    pptx: "proyectos/unidad-1-1/tema-5-conspiracion-queretaro.pptx"
  }
];

/* =========================================
   ELEMENTOS DE LA PÁGINA
========================================= */

const projectsGrid = document.querySelector("#projects-grid");

/* =========================================
   COMPROBAR SI EXISTE UN ARCHIVO
========================================= */

async function fileExists(file) {
  try {
    const response = await fetch(file, {
      method: "HEAD",
      cache: "no-store"
    });

    return response.ok;
  } catch (error) {
    console.error("No se pudo comprobar el archivo:", file, error);
    return false;
  }
}

/* =========================================
   CREAR TARJETAS DE LOS TEMAS
========================================= */

async function createTopicCards() {
  if (!projectsGrid) {
    console.error('No se encontró el elemento con id="projects-grid".');
    return;
  }

  projectsGrid.innerHTML = topics.map(topic => `
    <article class="project-team-card">

      <span class="project-team-number">
        TEMA ${String(topic.number).padStart(2, "0")}
      </span>

      <h3>${topic.title}</h3>

      <p>
        Consulta el material académico de este tema.
        Puedes leer los documentos o descargar las presentaciones.
      </p>

      <div class="topic-resources">

        <div class="topic-resource">
          <strong>DOCUMENTO PDF</strong>

          <div class="topic-buttons" id="pdf-${topic.number}">
            <span class="project-file-pending">
              Comprobando PDF...
            </span>
          </div>
        </div>

        <div class="topic-resource">
          <strong>PRESENTACIÓN POWERPOINT</strong>

          <div class="topic-buttons" id="pptx-${topic.number}">
            <span class="project-file-pending">
              Comprobando presentación...
            </span>
          </div>
        </div>

      </div>

    </article>
  `).join("");

  await checkTopicFiles();
}

/* =========================================
   MOSTRAR BOTONES SEGÚN LOS ARCHIVOS
========================================= */

async function checkTopicFiles() {
  for (const topic of topics) {
    const pdfContainer = document.querySelector(`#pdf-${topic.number}`);
    const pptxContainer = document.querySelector(`#pptx-${topic.number}`);

    if (!pdfContainer || !pptxContainer) continue;

    const [pdfExists, pptxExists] = await Promise.all([
      fileExists(topic.pdf),
      fileExists(topic.pptx)
    ]);

    /* =====================================
       BOTONES DEL PDF
    ===================================== */

    if (pdfExists) {
      pdfContainer.innerHTML = `
        <a
          href="${topic.pdf}"
          class="project-file-link"
          target="_blank"
          rel="noopener noreferrer">
          LEER PDF →
        </a>

        <a
          href="${topic.pdf}"
          class="project-file-link"
          download>
          DESCARGAR PDF ↓
        </a>
      `;
    } else {
      pdfContainer.innerHTML = `
        <span class="project-file-pending">
          PDF PENDIENTE
        </span>
      `;
    }

    /* =====================================
       BOTONES DE POWERPOINT
       LA LECTURA SE REALIZA CON EL PDF
    ===================================== */

    if (pptxExists) {
      pptxContainer.innerHTML = `
        ${
          pdfExists
            ? `
              <a
                href="${topic.pdf}"
                class="project-file-link"
                target="_blank"
                rel="noopener noreferrer">
                LEER PRESENTACIÓN →
              </a>
            `
            : `
              <span class="project-file-pending">
                LECTURA PENDIENTE: FALTA EL PDF
              </span>
            `
        }

        <a
          href="${topic.pptx}"
          class="project-file-link"
          download>
          DESCARGAR PPTX ↓
        </a>
      `;
    } else {
      pptxContainer.innerHTML = `
        <span class="project-file-pending">
          PPTX PENDIENTE
        </span>
      `;
    }
  }
}

/* =========================================
   INICIAR PÁGINA
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  createTopicCards();
});

