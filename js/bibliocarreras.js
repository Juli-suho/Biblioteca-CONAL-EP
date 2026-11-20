
/* =========================================
   BIBLIOTECA CONALEP
   BIBLIO CARRERAS
========================================= */

const careerData = {
  "inteligencia-artificial": {
    title: "Inteligencia Artificial",

    description:
      "La inteligencia artificial estudia el desarrollo de sistemas capaces de analizar información, reconocer patrones y realizar tareas que requieren procesos inteligentes.",

    projects: [
      {
        title: "Robótica inteligente",
        description: "Diseño de robots capaces de realizar tareas mediante sensores y programación."
      },
      {
        title: "Videojuegos inteligentes",
        description: "Creación de personajes que reaccionan a las decisiones del jugador."
      },
      {
        title: "Bases de datos",
        description: "Organización y análisis de información para desarrollar sistemas inteligentes."
      },
      {
        title: "Aprendizaje automático",
        description: "Sistemas que identifican patrones a partir de datos."
      },
      {
        title: "Asistentes virtuales",
        description: "Aplicaciones que reciben preguntas y generan respuestas."
      },
      {
        title: "Reconocimiento de imágenes",
        description: "Sistemas que identifican objetos y elementos visuales."
      }
    ],

    resources: [
      {
        title: "Álgebra básica",
        description: "Material provisional de apoyo matemático. No constituye un proyecto oficial de Inteligencia Artificial.",
        url: "recursos/libros/algebra-basica.pdf",
        label: "CONSULTAR PDF"
      }
    ]
  },

  "informatica": {
    title: "Informática",

    description:
      "La informática comprende el uso de computadoras, programas, redes y sistemas para procesar, almacenar y comunicar información.",

    projects: [
      {
        title: "Desarrollo web",
        description: "Diseño y programación de páginas y plataformas web."
      },
      {
        title: "Aplicaciones móviles",
        description: "Creación de aplicaciones para dispositivos móviles."
      },
      {
        title: "Redes de computadoras",
        description: "Configuración y administración de redes de comunicación."
      },
      {
        title: "Ciberseguridad",
        description: "Protección de sistemas, información y recursos digitales."
      },
      {
        title: "Bases de datos",
        description: "Diseño, almacenamiento y consulta de información."
      },
      {
        title: "Mantenimiento de equipos",
        description: "Identificación de fallas y mantenimiento de computadoras."
      }
    ],

    resources: [
      {
        title: "Informática básica PDF",
        description: "Material provisional de apoyo para conceptos de informática.",
        url: "recursos/libros/informatica-basica.pdf",
        label: "CONSULTAR PDF"
      },
      {
        title: "Informática básica presentación",
        description: "Presentación provisional de apoyo.",
        url: "recursos/libros/informatica-basica.pptx",
        label: "ABRIR PRESENTACIÓN"
      }
    ]
  },

  "electricidad-industrial": {
    title: "Electricidad Industrial",

    description:
      "La electricidad industrial se relaciona con la instalación, operación y mantenimiento de sistemas eléctricos utilizados en procesos industriales.",

    projects: [
      {
        title: "Instalaciones eléctricas",
        description: "Representación y montaje de instalaciones eléctricas."
      },
      {
        title: "Automatización industrial",
        description: "Sistemas que permiten controlar procesos de manera automática."
      },
      {
        title: "Control eléctrico",
        description: "Circuitos de control para motores y equipos."
      },
      {
        title: "Máquinas eléctricas",
        description: "Estudio y funcionamiento de motores y transformadores."
      },
      {
        title: "Circuitos eléctricos",
        description: "Análisis de circuitos y sus componentes."
      },
      {
        title: "Seguridad eléctrica",
        description: "Identificación de riesgos y medidas de prevención."
      }
    ],

    resources: []
  },

  "refrigeracion": {
    title: "Refrigeración",

    description:
      "La refrigeración aborda los sistemas utilizados para extraer calor, conservar temperaturas y mantener condiciones adecuadas en distintos espacios y equipos.",

    projects: [
      {
        title: "Aire acondicionado",
        description: "Funcionamiento y mantenimiento de sistemas de climatización."
      },
      {
        title: "Sistemas de refrigeración",
        description: "Análisis de los componentes de un sistema de refrigeración."
      },
      {
        title: "Mantenimiento preventivo",
        description: "Actividades para conservar los equipos en condiciones adecuadas."
      },
      {
        title: "Diagnóstico de fallas",
        description: "Identificación de problemas en equipos de refrigeración."
      },
      {
        title: "Eficiencia energética",
        description: "Propuestas para mejorar el consumo energético de los equipos."
      },
      {
        title: "Instalación de equipos",
        description: "Planeación y montaje de sistemas de climatización."
      }
    ],

    resources: []
  }
};

// =========================================
// ELEMENTOS HTML
// =========================================

const projectPanel = document.querySelector("#project-panel");
const projectContent = document.querySelector("#project-content");
const projectBack = document.querySelector("#project-back");

// =========================================
// RUTAS DE APLICACIONES INTERACTIVAS
// =========================================


const interactiveApps = {
  solarSystem: "https://juli-suho.github.io/Biblioteca-CONAL-EP/carrusel/aplicaciones/simulador-sistema-solar/index.html",
  imageRecognizer: "https://juli-suho.github.io/Biblioteca-CONAL-EP/carrusel/aplicaciones/reconocedor-ai/index.html"
};

// =========================================
// MOSTRAR UNA CARRERA
// =========================================

function renderCareer(careerId, selectedProjectIndex = null) {
  const career = careerData[careerId];

  if (!career || !projectPanel || !projectContent) {
    return;
  }

  // =========================================
  // ORDEN DE LOS PROYECTOS
  // =========================================

  let projectOrder = career.projects.map((_, index) => index);

  if (careerId === "inteligencia-artificial") {
    projectOrder = [2, 5, 0, 1, 3, 4];
  }

  // =========================================
  // GENERAR OPCIONES SELECCIONABLES
  // =========================================

  const projectHTML = projectOrder.map((index, position) => {
    const project = career.projects[index];

    return `
      <button
        type="button"
        class="project-item ${selectedProjectIndex === index ? "selected" : ""}"
        data-project-index="${index}"
        aria-pressed="${selectedProjectIndex === index}">

        <strong>${position + 1}. ${project.title}</strong>

        <small>${project.description}</small>

      </button>
    `;
  }).join("");

  // =========================================
  // MATERIALES DE APOYO
  // =========================================

  let resourcesHTML = "";

  if (career.resources.length > 0) {
    resourcesHTML = `
      <div class="project-resource">

        <h3>Materiales de apoyo disponibles</h3>

        <p>
          Los siguientes archivos son recursos provisionales de la biblioteca.
          Su presencia no significa que sean proyectos oficiales de esta carrera.
        </p>

        ${career.resources.map(resource => `
          <div style="margin: 16px 0;">

            <strong>${resource.title}</strong>

            <p>${resource.description}</p>

            <a
              href="${resource.url}"
              target="_blank"
              rel="noopener noreferrer">

              ${resource.label}

            </a>

          </div>
        `).join("")}

      </div>
    `;
  } else {
    resourcesHTML = `
      <div class="project-empty">

        <strong>Materiales y proyectos pendientes de publicación.</strong>

        <p>
          Todavía no hay documentos específicos cargados para esta carrera.
          Próximamente se podrán agregar proyectos, guías, prácticas y materiales.
        </p>

      </div>
    `;
  }

  // =========================================
  // PROYECTOS INTERACTIVOS
  // =========================================

  let interactiveProjectHTML = "";

  // -----------------------------------------
  // SIMULADOR DEL SISTEMA SOLAR
  // OPCIÓN: BASES DE DATOS
  // -----------------------------------------

  if (
    careerId === "inteligencia-artificial" &&
    selectedProjectIndex === 2
  ) {
    interactiveProjectHTML = `
      <div class="project-resource">

        <span class="career-kicker">
          PROYECTO INTERACTIVO · SIMULACIÓN EDUCATIVA
        </span>

        <h3 style="font-size:24px; margin-top:12px;">
          SIMULADOR DEL SISTEMA SOLAR
        </h3>

        <p>
          Explora una representación interactiva del Sistema Solar.
          Observa el movimiento de los planetas, modifica la velocidad
          de la simulación y consulta información sobre cada uno.
        </p>

        <a
          href="${interactiveApps.solarSystem}"
          target="_blank"
          rel="noopener noreferrer">

          ABRIR SIMULADOR DEL SISTEMA SOLAR →

        </a>

      </div>
    `;
  }

  // -----------------------------------------
  // RECONOCEDOR AI
  // OPCIÓN: RECONOCIMIENTO DE IMÁGENES
  // -----------------------------------------

  if (
    careerId === "inteligencia-artificial" &&
    selectedProjectIndex === 5
  ) {
    interactiveProjectHTML = `
      <div class="project-resource">

        <span class="career-kicker">
          PROYECTO INTERACTIVO · INTELIGENCIA ARTIFICIAL
        </span>

        <h3 style="font-size:24px; margin-top:12px;">
          RECONOCEDOR AI
        </h3>

        <p>
          Explora una aplicación de visión artificial capaz de analizar
          imágenes seleccionadas desde tu dispositivo e identificar personas,
          animales y objetos.
        </p>

        <a
          href="${interactiveApps.imageRecognizer}"
          target="_blank"
          rel="noopener noreferrer">

          ABRIR RECONOCEDOR AI →

        </a>

      </div>
    `;
  }

  // =========================================
  // CONSTRUIR EL PANEL DE LA CARRERA
  // =========================================

  projectContent.innerHTML = `

    <span class="career-kicker">
      BIBLIO CARRERAS · ÁREA DE FORMACIÓN
    </span>

    <h2>${career.title}</h2>

    <p class="project-description">
      ${career.description}
    </p>

    ${interactiveProjectHTML}

    <h3 style="
      color:#183d32;
      margin-top:30px;
      font-family:Georgia,serif;
      font-weight:400;">

      Ideas y líneas de proyectos

    </h3>

    <p class="project-description">
      Selecciona una opción para explorar el proyecto relacionado.
    </p>

    <div class="project-list">
      ${projectHTML}
    </div>

    ${resourcesHTML}

  `;

  // Mostrar panel
  projectPanel.classList.add("active");

  // =========================================
  // EVENTOS DE SELECCIÓN DE PROYECTOS
  // =========================================

  projectContent
    .querySelectorAll("[data-project-index]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.projectIndex);

        renderCareer(careerId, index);
      });
    });

  // Desplazamiento al panel
  projectPanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// =========================================
// SELECCIÓN DE CARRERAS
// =========================================

document.querySelectorAll("[data-career]").forEach(button => {
  button.addEventListener("click", () => {
    renderCareer(button.dataset.career);
  });
});

// =========================================
// VOLVER A LAS CARRERAS
// =========================================

if (projectBack) {
  projectBack.addEventListener("click", () => {
    projectPanel.classList.remove("active");

    projectContent.innerHTML = "";

    document.querySelector("#career-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
