
/* =========================================
   BIBLIOTECA CONALEP
   CATALOGO UNIFICADO DE QUINTO SEMESTRE
   PORTADAS DE MATERIAS Y VOLUMENES
========================================= */

document.addEventListener("DOMContentLoaded", iniciarBibliotecaMaterias);

function iniciarBibliotecaMaterias() {

  const subjectGrid = document.getElementById("subject-library-grid");
  const volumeArea = document.getElementById("subject-volume-area");
  const detailArea = document.getElementById("subject-volume-detail");
  const librarySection = document.getElementById("areas");

  if (!subjectGrid || !volumeArea || !detailArea) {
    console.error("No se encontraron los contenedores de la biblioteca.");
    return;
  }

  if (typeof areasCareers === "undefined") {
    subjectGrid.innerHTML = "<p>No se pudieron cargar las carreras.</p>";
    return;
  }

  let currentSubject = null;

  // =========================================
  // NORMALIZAR NOMBRES
  // =========================================

  function normalizar(nombre) {
    return nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  // =========================================
  // PORTADAS DE LAS ASIGNATURAS
  // =========================================

  const imagenesMaterias = {

    "temas selectos de matematicas":
      "recursos/portadas/01-temas-selectos-de-matematicas.jpg",

    "explotacion de datos":
      "recursos/portadas/02-explotacion-de-datos.jpg",

    "reconocimiento de patrones":
      "recursos/portadas/03-reconocimiento-de-patrones.jpg",

    "conciencia historica ii siglo xix y xx":
      "recursos/portadas/04-conciencia-historica-ii-siglo-xix-y-xx.jpg",

    "ingles":
      "recursos/portadas/05-ingles.jpg",

    "descripccion de organismos biologicos":
      "recursos/portadas/06-descripcion-de-organismos-biologicos.jpg",

    "descripcion de organismos biologicos":
      "recursos/portadas/06-descripcion-de-organismos-biologicos.jpg",

    "criptografia y seguridad":
      "recursos/portadas/07-criptografia-y-seguridad.jpg",

    "ciberseguridad en aplicaciones web":
      "recursos/portadas/08-ciberseguridad-en-aplicaciones-web.jpg",

    "formacion socioemocional v":
      "recursos/portadas/09-formacion-socioemocional-v.jpg",

    "ciberseguridad":
      "recursos/portadas/10-ciberseguridad.jpg",

    "desarrollo de proyectos web":
      "recursos/portadas/11-desarrollo-de-proyectos-web.jpg",

    "administracion de servidores":
      "recursos/portadas/12-administracion-de-servidores.jpg",

    "gestion de datos":
      "recursos/portadas/13-gestion-de-datos.jpg",

    "controladores industriales":
      "recursos/portadas/14-controladores-industriales.jpg",

    "instalaciones de fuerza":
      "recursos/portadas/15-instalaciones-de-fuerza.jpg",

    "diagnostico de fallas":
      "recursos/portadas/16-diagnostico-de-fallas.jpg",

    "eficiencia energetica":
      "recursos/portadas/17-eficiencia-energetica.jpg",

    "refrigeracion comercial":
      "recursos/portadas/18-refrigeracion-comercial.jpg",

    "instalacion de equipos":
      "recursos/portadas/19-instalacion-de-equipos.jpg",

    "mantenimiento correctivo":
      "recursos/portadas/20-mantenimiento-correctivo.jpg"
  };

  const imagenPredeterminada =
    "recursos/portadas/lectura.jpg";

  function obtenerImagenMateria(nombre) {
    const clave = normalizar(nombre);
    return imagenesMaterias[clave] || imagenPredeterminada;
  }

  // =========================================
  // PORTADAS PERSONALIZADAS DE VOLUMENES
  // CONCIENCIA HISTORICA II
  // =========================================

  const portadasConcienciaHistorica = {

    1: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-1.jpg",

    2: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-2.jpg",

    3: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-3.jpg",
    4: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-4.jpg",

    5: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-5.jpg",

    6: "recursos/portadas/volumenes/conciencia-historica-ii-siglo-xix-y-xx-volumen-6.jpg"

  };

  function obtenerPortadaVolumen(nombre, numero) {

    if (
      normalizar(nombre) ===
      "conciencia historica ii siglo xix y xx"
    ) {
      return portadasConcienciaHistorica[numero] || null;
    }

    return null;
  }

  // =========================================
  // RECOPILAR MATERIAS DE QUINTO SEMESTRE
  // =========================================

  const materias = [];

  Object.entries(areasCareers).forEach(([careerId, career]) => {

    const subjects = career.semesters?.[5];

    if (!Array.isArray(subjects)) return;

    subjects.forEach((subject, index) => {

      const key = normalizar(subject);

      const registro = {
        careerId,
        careerName: career.name || careerId,
        semester: 5,
        subject,
        index
      };

      const existente = materias.find(item => item.key === key);

      if (existente) {
        existente.careers.push(registro);
      } else {
        materias.push({
          key,
          subject,
          semester: 5,
          careers: [registro]
        });
      }

    });

  });

  if (materias.length === 0) {
    subjectGrid.innerHTML =
      "<p>No se encontraron materias de quinto semestre.</p>";
    return;
  }

  // =========================================
  // SELECCIONAR REGISTRO CON CONTENIDO
  // =========================================

  materias.forEach(item => {

    item.source =
      item.careers.find(registro =>
        typeof academicSupportContent !== "undefined" &&
        academicSupportContent?.[registro.careerId]?.[5]?.[registro.index]
      ) ||
      item.careers[0];

  });

  // =========================================
  // CONTADOR DE ASIGNATURAS
  // =========================================

  let count = document.getElementById("subject-library-count");

  if (!count) {
    count = document.createElement("p");
    count.id = "subject-library-count";
    count.className = "subject-library-count";
    subjectGrid.before(count);
  }

  count.textContent =
    `${materias.length} materias de quinto semestre`;

  // =========================================
  // MOSTRAR CATALOGO DE ASIGNATURAS
  // =========================================

  subjectGrid.innerHTML = materias.map((item, index) => {

    const imagen = obtenerImagenMateria(item.subject);

    return `
      <article class="subject-library-card">

        <div class="subject-library-icon">

          <img
            class="subject-library-image"
            src="${imagen}"
            alt="Imagen de ${item.subject}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${imagenPredeterminada}'"
          >

        </div>

        <div class="subject-library-information">

          <span class="subject-library-career">
            ${item.careers.length > 1
              ? "Materia compartida"
              : item.source.careerName}
          </span>

          <h3>${item.subject}</h3>

          <p>Quinto semestre</p>

          <button
            type="button"
            class="subject-library-button"
            data-subject-index="${index}">

            CONSULTAR MATERIA →

          </button>

        </div>

      </article>
    `;

  }).join("");

  // =========================================
  // ABRIR UNA ASIGNATURA
  // =========================================

  subjectGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-subject-index]");

    if (!button) return;

    currentSubject = materias[Number(button.dataset.subjectIndex)];

    if (!currentSubject) return;

    detailArea.innerHTML = "";
    detailArea.classList.remove("active", "is-hidden");
    volumeArea.classList.remove("is-hidden");

    if (librarySection) {
      librarySection.classList.add("subject-library-screen-mode");
    }

    document.body.classList.add("subject-library-open");

    subjectGrid.hidden = true;

    if (count) count.hidden = true;

    volumeArea.classList.add("subject-volume-area", "active");
    detailArea.classList.add("subject-volume-detail");

    const source = currentSubject.source;

    let teacher = "Docente pendiente de asignar";

    let configuration = {
      email: "Por asignar",
      credits: "Por confirmar",
      totalHours: "Por confirmar"
    };

    if (typeof getTeacher === "function") {
      teacher = getTeacher(
        source.careerId,
        5,
        source.index
      ) || teacher;
    }

    if (typeof getSubjectConfiguration === "function") {
      configuration = getSubjectConfiguration(
        source.careerId,
        5,
        source.index
      ) || configuration;
    }

    const careers = currentSubject.careers
      .map(item => item.careerName)
      .join(" · ");

    // =========================================
    // GENERAR LAS TARJETAS DE LOS VOLUMENES
    // =========================================

    const tarjetasVolumenes = [1, 2, 3, 4, 5, 6]
      .map(number => {

        const portada = obtenerPortadaVolumen(
          currentSubject.subject,
          number
        );

        const tienePortada = Boolean(portada);

        return `
          <button
            type="button"
            class="subject-volume-card ${tienePortada ? "has-custom-cover" : ""}"
            data-volume="${number}"
            style="
              ${tienePortada
                ? "display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:12px;padding:13px;overflow:hidden;background:#fffefa;border:1px solid #dce5d9;border-radius:13px;min-width:0;transition:transform .25s ease,box-shadow .25s ease;"
                : ""}
            "
          >

            ${tienePortada ? `
              <img
                src="${portada}"
                alt="Portada del volumen ${number} de ${currentSubject.subject}"
                loading="lazy"
                style="
                  display:block;
                  width:100%;
                  aspect-ratio:4/5;
                  max-height:240px;
                  object-fit:cover;
                  object-position:center;
                  border-radius:9px;
                  background:#edf0e7;
                "
                onerror="this.style.display='none'"
              >
            ` : ""}

            <span
              class="subject-volume-number"
              ${tienePortada ? `
                style="
                  align-self:center;
                  min-width:43px;
                  padding:6px 15px;
                  border-radius:30px;
                  background:#183d32;
                  color:#fffefa;
                  text-align:center;
                "
              ` : ""}
            >
              ${number}
            </span>

            <strong
              ${tienePortada ? `
                style="
                  display:block;
                  text-align:center;
                  color:#183d32;
                  font-family:var(--serif);
                  font-size:13px;
                  line-height:1.5;
                "
              ` : ""}
            >
              ${currentSubject.subject} ${number}
            </strong>

            <small
              ${tienePortada ? `
                style="
                  display:block;
                  text-align:center;
                  color:#8a754d;
                  font-size:10px;
                  font-weight:700;
                "
              ` : ""}
            >
              Consultar contenido
            </small>

          </button>
        `;

      }).join("");

    // =========================================
    // MOSTRAR VISTA DE LA ASIGNATURA
    // =========================================

    volumeArea.innerHTML = `

      <div class="subject-volume-heading">

        <span class="subject-library-career">
          QUINTO SEMESTRE
        </span>

        <h3>${currentSubject.subject}</h3>

        <p>
          Aquí encontrarás los contenidos de aprendizaje, las actividades,
          los materiales de consulta y los recursos organizados por volumen.
        </p>

      </div>

      <div class="subject-volume-data">

        <div>
          <span>Docente responsable</span>
          <strong>${teacher}</strong>
        </div>

        <div>
          <span>Especialidades relacionadas</span>
          <strong>${careers}</strong>
        </div>

        <div>
          <span>Correo</span>
          <strong>${configuration.email || "Por asignar"}</strong>
        </div>

        <div>
          <span>Créditos</span>
          <strong>${configuration.credits ?? "Por confirmar"}</strong>
        </div>

      </div>

      <h4>Volúmenes de aprendizaje</h4>

      <div class="subject-volume-grid">

        ${tarjetasVolumenes}

      </div>

      <button
        type="button"
        class="subject-back-button"
        id="back-to-subjects">

        ← REGRESAR A LAS MATERIAS

      </button>

    `;

    volumeArea.classList.add("active");

    volumeArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

  // =========================================
  // REGRESAR AL CATALOGO Y ABRIR VOLUMENES
  // =========================================

  volumeArea.addEventListener("click", event => {

    if (event.target.closest("#back-to-subjects")) {

      volumeArea.classList.remove("active", "is-hidden");
      detailArea.classList.remove("active", "is-hidden");
      detailArea.innerHTML = "";

      subjectGrid.hidden = false;

      if (count) count.hidden = false;

      if (librarySection) {
        librarySection.classList.remove("subject-library-screen-mode");
      }

      document.body.classList.remove("subject-library-open");

      subjectGrid.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      return;
    }

    const button = event.target.closest("[data-volume]");

    if (!button || !currentSubject) return;

    const volume = Number(button.dataset.volume);
    const source = currentSubject.source;

    volumeArea.classList.add("is-hidden");

    let teacher = "Docente pendiente de asignar";

    let configuration = {
      email: "Por asignar",
      credits: "Por confirmar",
      totalHours: "Por confirmar"
    };

    if (typeof getTeacher === "function") {
      teacher =
        getTeacher(source.careerId, 5, source.index) || teacher;
    }

    if (typeof getSubjectConfiguration === "function") {
      configuration = getSubjectConfiguration(
        source.careerId,
        5,
        source.index
      ) || configuration;
    }

    // =========================================
    // CONTENIDO PREDETERMINADO
    // =========================================

    let academicHTML = `

      <div class="subject-volume-pending">

        <span>📚</span>

        <h4>Contenido pendiente de incorporar</h4>

        <p>
          Este volumen está preparado para recibir su syllabus,
          documentos, presentaciones, actividades y proyectos.
        </p>

      </div>

    `;

    const hasContent =
      typeof academicSupportContent !== "undefined" &&
      academicSupportContent?.[source.careerId]?.[5]?.[source.index];

    // =========================================
    // CONTENIDO ACADEMICO DEL VOLUMEN 1
    // =========================================

    if (
      volume === 1 &&
      hasContent &&
      typeof createAcademicSupportTable === "function"
    ) {

      academicHTML = createAcademicSupportTable(
        source.subject,
        source.careerId,
        5,
        source.index
      );

    }

    // =========================================
    // MOSTRAR DETALLE DEL VOLUMEN
    // =========================================

    detailArea.innerHTML = `

      <div class="subject-volume-detail-heading">

        <span class="subject-library-career">
          QUINTO SEMESTRE
        </span>

        <h3>${currentSubject.subject}</h3>

        <h4>Volumen ${volume}</h4>

      </div>

      <div class="subject-volume-data">

        <div>
          <span>Docente</span>
          <strong>${teacher}</strong>
        </div>

        <div>
          <span>Correo</span>
          <strong>${configuration.email || "Por asignar"}</strong>
        </div>

        <div>
          <span>Créditos</span>
          <strong>${configuration.credits ?? "Por confirmar"}</strong>
        </div>

        <div>
          <span>Horas totales</span>
          <strong>${configuration.totalHours ?? "Por confirmar"}</strong>
        </div>

      </div>

      ${academicHTML}

      <button
        type="button"
        class="subject-back-button"
        id="back-to-volumes">

        ← REGRESAR A LOS VOLÚMENES

      </button>

    `;

    detailArea.classList.add("active");

    detailArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

  // =========================================
  // REGRESAR A LOS VOLUMENES
  // =========================================

  detailArea.addEventListener("click", event => {

    if (!event.target.closest("#back-to-volumes")) return;

    detailArea.classList.remove("active", "is-hidden");
    volumeArea.classList.remove("is-hidden");

    volumeArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

  console.log(
    `Biblioteca CONALEP: ${materias.length} materias únicas de quinto semestre.`
  );

}
