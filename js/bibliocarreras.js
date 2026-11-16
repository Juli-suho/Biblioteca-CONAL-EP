
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

const projectPanel = document.querySelector("#project-panel");
const projectContent = document.querySelector("#project-content");
const projectBack = document.querySelector("#project-back");

function renderCareer(careerId) {
  const career = careerData[careerId];

  if (!career || !projectPanel || !projectContent) {
    return;
  }

  const projectHTML = career.projects.map((project, index) => `
    <article class="project-item">
      <strong>${index + 1}. ${project.title}</strong>
      <small>${project.description}</small>
    </article>
  `).join("");

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
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
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

  projectContent.innerHTML = `
    <span class="career-kicker">BIBLIO CARRERAS · ÁREA DE FORMACIÓN</span>
    <h2>${career.title}</h2>
    <p class="project-description">${career.description}</p>

    <h3 style="color:#183d32; margin-top:30px; font-family:Georgia,serif; font-weight:400;">
      Ideas y líneas de proyectos
    </h3>

    <div class="project-list">
      ${projectHTML}
    </div>

    ${resourcesHTML}
  `;

  projectPanel.classList.add("active");
  projectPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-career]").forEach(button => {
  button.addEventListener("click", () => {
    renderCareer(button.dataset.career);
  });
});

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
