
/* =========================================
   BIBLIOTECA CONALEP
   ÁREAS DEL CONOCIMIENTO
========================================= */

/* =========================================
   CARRERAS Y MATERIAS
========================================= */

const areasCareers = {
  "inteligencia-artificial": {
    name: "Inteligencia Artificial",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    description: "Área enfocada en el desarrollo de sistemas inteligentes, análisis de datos, automatización y creación de soluciones tecnológicas. Los contenidos de los semestres distintos al quinto son ejemplos demostrativos.",
    semesters: {
      1: ["Fundamentos de matemáticas", "Introducción a la informática", "Pensamiento lógico", "Comunicación", "Fundamentos de programación"],
      2: ["Álgebra aplicada", "Programación básica", "Introducción a las bases de datos", "Tecnología digital", "Análisis de problemas"],
      3: ["Estructuras de datos", "Programación orientada a objetos", "Estadística básica", "Fundamentos de inteligencia artificial"],
      4: ["Aprendizaje automático", "Administración de bases de datos", "Procesamiento de datos", "Desarrollo de aplicaciones"],
      5: [
        "Temas Selectos de Matematicas",
        "Explotación de Datos",
        "Reconocimiento de Patrones",
        "Conciencia Historica II Siglo XIX Y XX",
        "Ingles",
        "Descripcción de Organismos Biologicos",
        "Criptografia y Seguridad",
        "Ciberseguridad en Aplicaciones Web",
        "Formación Socioemocional V"
      ],
      6: ["Sistemas inteligentes", "Ética tecnológica", "Integración de proyectos", "Proyecto integrador"]
    }
  },

  "informatica": {
    name: "Informática",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    description: "Área relacionada con el uso de equipos de cómputo, desarrollo de software, redes, administración de información y seguridad digital. Los contenidos son ejemplos demostrativos.",
    semesters: {
      1: ["Fundamentos de informática", "Matemáticas básicas", "Comunicación", "Introducción a la computación", "Pensamiento lógico"],
      2: ["Sistemas operativos", "Programación básica", "Herramientas digitales", "Mantenimiento de equipos", "Bases de datos"],
      3: ["Desarrollo web", "Programación orientada a objetos", "Redes de computadoras", "Diseño de bases de datos"],
      4: ["Administración de redes", "Desarrollo de aplicaciones", "Seguridad informática", "Sistemas de información"],
      5: ["Ciberseguridad", "Desarrollo de proyectos web", "Administración de servidores", "Gestión de datos"],
      6: ["Auditoría informática", "Seguridad de sistemas", "Proyecto de software", "Proyecto integrador"]
    }
  },

  "electricidad-industrial": {
    name: "Electricidad Industrial",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    description: "Área orientada a la comprensión de instalaciones, circuitos, máquinas y sistemas de control eléctrico empleados en entornos industriales.",
    semesters: {
      1: ["Matemáticas básicas", "Fundamentos de electricidad", "Dibujo técnico", "Seguridad industrial", "Comunicación"],
      2: ["Circuitos eléctricos", "Mediciones eléctricas", "Herramientas y materiales", "Interpretación de planos"],
      3: ["Instalaciones eléctricas", "Electrónica básica", "Máquinas eléctricas", "Sistemas de protección"],
      4: ["Control eléctrico", "Motores eléctricos", "Automatización básica", "Mantenimiento eléctrico"],
      5: ["Controladores industriales", "Instalaciones de fuerza", "Diagnóstico de fallas", "Eficiencia energética"],
      6: ["Automatización industrial", "Mantenimiento especializado", "Proyecto eléctrico", "Proyecto integrador"]
    }
  },

  "refrigeracion": {
    name: "Refrigeración",
    image: "https://images.unsplash.com/photo-1631545806609-1a5a7f9d1b7d?auto=format&fit=crop&w=1400&q=85",
    description: "Área enfocada en el funcionamiento, instalación, mantenimiento y diagnóstico de sistemas de refrigeración y climatización.",
    semesters: {
      1: ["Matemáticas básicas", "Fundamentos de refrigeración", "Seguridad industrial", "Herramientas de trabajo", "Comunicación"],
      2: ["Principios de termodinámica", "Electricidad básica", "Componentes de refrigeración", "Dibujo técnico"],
      3: ["Sistemas de refrigeración", "Instalaciones eléctricas", "Transferencia de calor", "Mediciones técnicas"],
      4: ["Aire acondicionado", "Mantenimiento preventivo", "Diagnóstico de fallas", "Controles eléctricos"],
      5: ["Refrigeración comercial", "Eficiencia energética", "Instalación de equipos", "Mantenimiento correctivo"],
      6: ["Sistemas de climatización", "Diagnóstico especializado", "Proyecto de refrigeración", "Proyecto integrador"]
    }
  }
};

/* =========================================
   DOCENTES DE CADA MATERIA
========================================= */

const teacherAssignments = {
  "inteligencia-artificial": {
    1: [
      "Ing. Alejandro Ramírez Torres",
      "Mtra. Daniela Sánchez Méndez",
      "Lic. Roberto Hernández Cruz",
      "Mtra. Gabriela Flores Castillo",
      "Ing. Carlos Eduardo Pérez"
    ],
    2: [
      "Mtro. Fernando Morales Díaz",
      "Ing. Ricardo Jiménez López",
      "Mtra. Patricia Gómez Herrera",
      "Lic. Mariana Torres Aguilar",
      "Ing. Sergio Castillo Méndez"
    ],
    3: [
      "Ing. Andrés Romero Vargas",
      "Mtra. Laura Méndez Ruiz",
      "Mtro. Javier Ortega Sánchez",
      "Ing. Miguel Ángel Navarro"
    ],
    4: [
      "Mtra. Claudia Ramírez Flores",
      "Ing. Eduardo Castillo Pérez",
      "Mtro. Daniel Hernández López",
      "Ing. Francisco Torres Medina"
    ],
    5: [
      "Mtro. Jorge Armando Cú Sanchez",
      "Mtra. Martha Luz Alba García Valdés",
      "Mtra. Dalia Evangelina Padilla Paz",
      "Mtro. Orlando Isaac Angulo Tuz",
      "Mtro. Jesús Flores Salazar",
      "Mtra. Beatriz Eugenia Trujeque Pinelo",
      "Mtro. Adrián Willebaldo Aké Cordero",
      "Mtro. Aurelio López Ovando",
      "Mtra. Maria Del Rosario Cervera Sabido"
    ],
    6: [
      "Ing. Mauricio Sánchez López",
      "Mtra. Alejandra Vargas Méndez",
      "Mtro. Héctor Ramírez Castillo",
      "Ing. Óscar Hernández Pérez"
    ]
  },

  "informatica": {
    1: ["Ing. Ricardo Méndez Torres", "Mtra. Gabriela Sánchez Ruiz", "Lic. Eduardo Ramírez Flores", "Ing. Alejandro Castillo López", "Mtro. Fernando Pérez Medina"],
    2: ["Ing. Carlos Morales Vargas", "Mtra. Daniela Romero Díaz", "Ing. Javier Hernández Cruz", "Mtro. Roberto Torres Aguilar", "Lic. Patricia Flores Méndez"],
    3: ["Ing. Miguel Ángel Castillo", "Mtro. Andrés Ramírez Sánchez", "Mtra. Laura Pérez Torres", "Ing. Francisco Morales López"],
    4: ["Mtro. Sergio Hernández Díaz", "Ing. Diego Flores Castillo", "Mtra. Claudia Gómez Ramírez", "Ing. Arturo Sánchez Medina"],
    5: ["Ing. Ernesto Torres Ruiz", "Mtra. Mariana Castillo Pérez", "Mtro. Daniel Romero López", "Ing. Jorge Aguilar Méndez"],
    6: ["Mtra. Verónica Ramírez Cruz", "Ing. Mauricio Hernández Torres", "Mtro. Raúl Sánchez Flores", "Ing. Óscar Morales Díaz"]
  },

  "electricidad-industrial": {
    1: ["Ing. José Antonio Ramírez", "Mtro. Héctor Castillo Méndez", "Mtra. Silvia Torres López", "Ing. Fernando Aguilar Cruz", "Lic. Andrea Flores Sánchez"],
    2: ["Ing. Roberto Pérez Medina", "Mtro. Eduardo Hernández Ruiz", "Ing. Carlos Sánchez Torres", "Mtra. Gabriela Morales Díaz"],
    3: ["Ing. Alejandro Romero López", "Mtro. Javier Castillo Vargas", "Ing. Miguel Ángel Flores", "Mtra. Daniela Ramírez Cruz"],
    4: ["Ing. Ricardo Torres Méndez", "Mtro. Francisco Pérez Sánchez", "Ing. Sergio Morales Castillo", "Mtra. Patricia Hernández Ruiz"],
    5: ["Ing. Diego Aguilar Flores", "Mtro. Arturo Ramírez López", "Ing. Ernesto Castillo Díaz", "Mtra. Laura Sánchez Méndez"],
    6: ["Ing. Mauricio Romero Torres", "Mtro. Daniel Flores Aguilar", "Ing. Jorge Hernández Pérez", "Mtro. Óscar Castillo Ruiz"]
  },

  "refrigeracion": {
    1: ["Ing. Francisco Ramírez Torres", "Mtro. Carlos Hernández López", "Mtra. Mariana Flores Castillo", "Ing. Ricardo Sánchez Méndez", "Lic. Gabriela Pérez Ruiz"],
    2: ["Ing. Alejandro Morales Cruz", "Mtro. Eduardo Torres Medina", "Ing. Roberto Castillo López", "Mtra. Daniela Romero Sánchez"],
    3: ["Ing. Miguel Ángel Ramírez", "Mtro. Javier Flores Torres", "Ing. Fernando Pérez Castillo", "Mtra. Claudia Hernández Ruiz"],
    4: ["Ing. Arturo Sánchez López", "Mtro. Diego Morales Méndez", "Ing. Sergio Ramírez Cruz", "Mtra. Verónica Castillo Torres"],
    5: ["Ing. Ernesto Hernández Flores", "Mtro. Andrés Pérez Medina", "Ing. Mauricio Torres Sánchez", "Mtra. Laura Ramírez Aguilar"],
    6: ["Ing. Raúl Castillo Méndez", "Mtro. Daniel Sánchez Torres", "Ing. Óscar Flores Ruiz", "Mtra. Patricia Morales López"]
  }
};

/* =========================================
   CONFIGURACIÓN DE LAS FICHAS
========================================= */

const subjectConfigurations = {
  "inteligencia-artificial": {
    5: {
      0: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      1: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      2: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      3: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      4: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      5: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      6: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      7: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" },
      8: { email: "Por asignar", credits: "Por confirmar", totalHours: "Por confirmar" }
    }
  }
};

/* =========================================
   CONTENIDO DE APOYO ACADÉMICO
   INTELIGENCIA ARTIFICIAL · QUINTO SEMESTRE
========================================= */

const academicSupportContent = {
  "inteligencia-artificial": {
    5: {
      0: [
        {
          title: "1.- Interpretación de sistemas de coordenadas rectangulares y sus aplicaciones",
          topics: [
            {
              number: "1.1.-",
              content: "Analiza la ecuación de la recta por medio de su representación en el sistema de coordenadas rectangulares.",
              activity: "Elabora un reporte donde demuestre que encuentra la ecuación de la recta en su forma pendiente ordenada y forma general, a partir de una situación cotidiana."
            },
            {
              number: "1.2.-",
              content: "Representa las soluciones de una ecuación, sistema de ecuaciones o inecuaciones mediante un mapeo en el plano.",
              activity: "Realiza práctica sobre la interpretación gráfica de la solución de dos rectas que se intersecan en un caso de la vida cotidiana."
            }
          ]
        },
        {
          title: "2.- Representación geométrica de cónicas y transformaciones en sistemas de coordenadas",
          topics: [
            {
              number: "2.1.-",
              content: "Analiza la naturaleza de las curvas cónicas mediante el estudio de sus representaciones gráficas en el contexto de situaciones cotidianas.",
              activity: "Realiza prácticas de cónicas (circunferencia, parábola, elipse, hipérbola), que incluyan procesos de ejercicios de cada cónica, gráfica de cada ejercicio y análisis del problema asignado de su contexto. Heteroevaluación."
            },
            {
              number: "2.2.-",
              content: "Identifica las transformaciones y rotaciones en el plano usando diferentes sistemas de coordenadas.",
              activity: "Realiza un vídeo utilizando GeoGebra u otra plataforma en el que expone los cambios necesarios a una ecuación para realizar una traslación y una rotación, trabajando con coordenadas rectangulares y coordenadas polares."
            }
          ]
        }
      ],

      1: [
        {
          title: "1.- Ejecución del procedimiento para el procesamiento distribuido de datos",
          topics: [
            {
              number: "1.1.-",
              content: "Ejecuta una gran cantidad de datos de manera distribuida en diferentes nodos, demostrando las posibilidades de escalabilidad.",
              activity: "Elabora un reporte sobre el almacenamiento, procesamiento y análisis de datos masivos aprovechando las características de Hadoop o un software similar."
            },
            {
              number: "1.2.-",
              content: "Replica de datos en diferentes nodos segmentando para la distribución de la carga de trabajo.",
              activity: "Selecciona las fuentes de datos de acuerdo con el entorno de programación, utilizando MAPREDUCE, HFDS, compatibles con Mongo DB. (Heteroevaluación)."
            }
          ]
        },
        {
          title: "2.- Optimización del funcionamiento de las tareas",
          topics: [
            {
              number: "2.1.-",
              content: "Configura ambientes que le permiten procesar una gran cantidad de datos a través de una o varias herramientas informáticas.",
              activity: "Realiza ejercicios sobre el funcionamiento entre MAPREDUCE y Apache Spark, en parámetros de desempeño en velocidad, almacenamiento y procesamiento de memoria."
            },
            {
              number: "2.2.-",
              content: "Procesa el flujo de datos en tiempo real provenientes de una fuente determinada, transformándolos en información que puede ser analizada al momento.",
              activity: "Crea ecosistema que permite distribuir las cargas de trabajo para procesar información en tiempo real en el ambiente de HADOOP con Apache Storm y Apache Kafka, procesando datos en forma masiva con mayor velocidad."
            },
            {
              number: "2.3.-",
              content: "Implementa estrategias que mejoran el desempeño en la búsqueda para hacer consultas eficientes en un entorno de big data.",
              activity: "Analiza de forma interactiva las métricas de seguridad y desempeño del ecosistema implementado."
            }
          ]
        }
      ],

      2: [
        {
          title: "1.- Aplicación de métodos para la adquisición de datos dentro del proceso de modelado",
          topics: [
            {
              number: "1.1.-",
              content: "Reconoce el proceso de modelado de datos, el sistema físico modelado por especialista y la validación de los datos obtenidos mediante sistemas de medición.",
              activity: "Realiza un diagrama de flujo sobre el proceso de modelado de patrones, que incluya sistema físico modelado por especialista y sistemas de medición."
            },
            {
              number: "1.2.-",
              content: "Utiliza métodos manuales y por programación para la adquisición de un banco de patrones, especificando la clasificación.",
              activity: "Construye un banco de patrones por medio de diversas fuentes de obtención, estableciendo los patrones a seguir para el reconocimiento de rostros, objetos o caracteres."
            }
          ]
        },
        {
          title: "2.- Identificación de variables de entrada y de características para el reconocimiento de patrones",
          topics: [
            {
              number: "2.1.-",
              content: "Realiza el proceso de preprocesado, segmentación de datos y aplicación de filtros al banco de patrones para su reconocimiento.",
              activity: "Elabora un ejercicio donde aplica los métodos de identificación de las variables de entrada, mediante una aplicación o programa para analítica de datos y aplica filtros y retoque fotográfico en caso de ser necesario."
            },
            {
              number: "2.2.-",
              content: "Obtiene un vector con las características que representan de la mejor manera al patrón original, aplicando las estrategias y procedimientos de selección variables, reduciendo la dimensionalidad de la información.",
              activity: "Establece parámetros utilizando los diferentes algoritmos para reconocer las características a partir del banco de imágenes, objetos o patrones."
            }
          ]
        },
        {
          title: "3.- Uso de redes neuronales",
          topics: [
            {
              number: "3.1.-",
              content: "Procesa imágenes, caracteres u objetos, realizando los ajustes en la red neuronal para aumentar el grado de asertividad mediante el enfoque lógico combinatorio.",
              activity: "Realiza un reporte sobre el procesamiento de imágenes, caracteres u objetos de forma automática, realizando los ajustes de la red neuronal para incrementar el asertividad del reconocimiento entre el 70% y 85%."
            },
            {
              number: "3.2.-",
              content: "Identifica las características de los procesos de clasificación supervisada, semi-supervisada y no supervisada para el reconocimiento de conjuntos persistentes.",
              activity: "Realiza una práctica con la red neuronal para clasificar objetos que no pertenecen al banco de imágenes inicial, de forma supervisada y semi-supervisada. Heteroevaluación."
            }
          ]
        }
      ],

      3: [
        {
          title: "1.- Formación histórica del México independiente",
          topics: [
            {
              number: "1.1.-",
              content: "Identifica las causas internas y externas de la Independencia de México."
            },
            {
              number: "1.2.-",
              content: "Explica los retos económicos, políticos y socioculturales a los que se enfrenta México en el siglo XIX."
            }
          ]
        },
        {
          title: "2.- Construcción histórica del Estado Mexicano",
          topics: [
            {
              number: "2.1.-",
              content: "Identifica los proyectos e intereses ideológicos expansionistas en México en dos casos: Estados Unidos y Francia, incluyendo procesos como luchas obreras, campesinas y femeninas aún vigentes."
            },
            {
              number: "2.2.-",
              content: "Describe los retos políticos, económicos y socioculturales a los que se enfrenta el Estado Mexicano entre 1824 y 1876."
            }
          ]
        },
        {
          title: "3.- Reconfiguración histórica mexicana",
          topics: [
            {
              number: "3.1.-",
              content: "Describe las características económicas, sociales, políticas y culturales del Porfiriato y sus contradicciones a través de la Revolución Mexicana."
            },
            {
              number: "3.2.-",
              content: "Describe las generalidades más representativas del periodo llamado posrevolución al Cardenismo."
            }
          ]
        }
      ],

      4: [
        {
          title: "1.- Aplicación de condiciones, ideas y solicitudes en eventos de la vida diaria",
          topics: [
            {
              number: "1.1.-",
              content: "Emite expresiones utilizando Would y Will que le permiten hacer solicitudes en presente simple."
            },
            {
              number: "1.2.-",
              content: "Aplica la causa-efecto en situaciones de la vida cotidiana de acuerdo con su contexto."
            }
          ]
        },
        {
          title: "2.- Implementación de acciones realizadas por terceros en los tiempos presente y pasado",
          topics: [
            {
              number: "2.1.-",
              content: "Emplea la voz pasiva apoyándose del presente y pasado."
            },
            {
              number: "2.2.-",
              content: "Implementa el uso del presente perfecto mediante el reported speech para disculpas y recomendaciones."
            }
          ]
        }
      ],

      5: [
        {
          title: "1.- Desarrollo sostenible y cuidado del entorno",
          topics: [
            {
              number: "1.1.-",
              content: "Identifica los objetivos de desarrollo sostenible para tomar decisiones sobre el cuidado de la salud personal, colectiva y del medio ambiente."
            },
            {
              number: "1.2.-",
              content: "Aplica propuestas que contribuyan al cuidado del entorno social y ambiental."
            }
          ]
        },
        {
          title: "2.- Proyectos comunitarios, sostenibles y sustentables",
          topics: [
            {
              number: "2.1.-",
              content: "Planifica acciones que promuevan la organización y desarrollo de proyectos comunitarios."
            },
            {
              number: "2.2.-",
              content: "Participa en proyectos comunitarios a favor del ambiente y el entorno social, en un marco de sostenibilidad y sustentabilidad."
            }
          ]
        }
      ],

      6: [
        {
          title: "1.- Diferenciación entre organismos unicelulares y multicelulares, así como estructuras y funciones de la célula",
          topics: [
            {
              number: "1.1.-",
              content: "Identifica la célula como unidad estructural y funcional de todos los organismos vivos, reconociendo los diferentes tipos."
            },
            {
              number: "1.2.-",
              content: "Distingue la relación entre el nivel estructural jerárquico de la célula y las reacciones químicas específicas."
            }
          ]
        },
        {
          title: "2.- Descripción de la información genética que contienen las células en los cromosomas",
          topics: [
            {
              number: "2.1.-",
              content: "Describe los procesos de reproducción sexual y/o asexual para la transferencia de la información genética."
            },
            {
              number: "2.2.-",
              content: "Identifica cómo la variabilidad genética determina las características heredadas en las especies."
            }
          ]
        },
        {
          title: "3.- Identificación de los factores que intervienen en la adaptación genética en los procesos evolutivos",
          topics: [
            {
              number: "3.1.-",
              content: "Identifica la información genética y la relación entre los factores evolutivos que favorecen la selección natural."
            },
            {
              number: "3.2.-",
              content: "Describe los rasgos evolutivos que favorecen la adaptación de las especies en el entorno."
            }
          ]
        }
      ],

      7: [
        {
          title: "1.- Identificación de la protección de redes y hardware",
          topics: [
            {
              number: "1.1.-",
              content: "Describe el sistema de prevención de intrusos basados en red, que funcionan por medio de softwares de código abierto."
            },
            {
              number: "1.2.-",
              content: "Identifica las acciones a implementar en la administración de servicios del ancho de banda Firewall."
            }
          ]
        },
        {
          title: "2.- Implementación de procesos de seguridad en software y aplicaciones",
          topics: [
            {
              number: "2.1.-",
              content: "Examina las acciones de seguridad por medio del pentesting, desde las vulnerabilidades, tipos de análisis y las herramientas más utilizadas, para prevenir los fallos en los sistemas."
            },
            {
              number: "2.2.-",
              content: "Realiza acciones de instalación y prueba de seguridad dentro de las aplicaciones para evitar vulnerabilidades contra amenazas, tales como la modificación y acceso no autorizado."
            },
            {
              number: "2.3.-",
              content: "Ejecuta mecanismos de autenticación, definiendo las reglas y el formato de almacenamiento de la información de seguridad en credenciales y señales."
            }
          ]
        },
        {
          title: "3.- Operación de políticas de seguridad",
          topics: [
            {
              number: "3.1.-",
              content: "Demuestra la efectividad de los mecanismos preventivos y correctivos de las políticas internas de la organización para preservar la confidencialidad, integridad y disponibilidad."
            },
            {
              number: "3.2.-",
              content: "Establece un código normativo para garantizar que las redes y usuarios de una organización cumplan con las prescripciones de seguridad."
            }
          ]
        }
      ],

      8: [
        {
          title: "1.- Desarrollo sostenible y cuidado del entorno",
          topics: [
            {
              number: "1.1.-",
              content: "Identifica los objetivos de desarrollo sostenible para tomar decisiones sobre el cuidado de la salud personal, colectiva y del medio ambiente."
            },
            {
              number: "1.2.-",
              content: "Aplica propuestas que contribuyan al cuidado del entorno social y ambiental."
            }
          ]
        },
        {
          title: "2.- Proyectos comunitarios, sostenibles y sustentables",
          topics: [
            {
              number: "2.1.-",
              content: "Planifica acciones que promuevan la organización y desarrollo de proyectos comunitarios."
            },
            {
              number: "2.2.-",
              content: "Participa en proyectos comunitarios a favor del ambiente y el entorno social, en un marco de sostenibilidad y sustentabilidad."
            }
          ]
        }
      ]
    }
  }
};

/* =========================================
   OBTENER EL DOCENTE
========================================= */

function getTeacher(careerId, semesterNumber, subjectIndex) {
  const teachers = teacherAssignments[careerId]?.[semesterNumber];

  if (!teachers || !teachers[subjectIndex]) {
    return "Docente pendiente de asignar";
  }

  return teachers[subjectIndex].trim();
}

/* =========================================
   OBTENER CONFIGURACIÓN DE UNA MATERIA
========================================= */

function getSubjectConfiguration(careerId, semesterNumber, subjectIndex) {
  return subjectConfigurations[careerId]?.[semesterNumber]?.[subjectIndex] || {
    email: "Por asignar",
    credits: "Por confirmar",
    totalHours: "Por confirmar"
  };
}

/* =========================================
   FICHA DEMOSTRATIVA DE CÁLCULO DIFERENCIAL
========================================= */

const calculusExample = {
  code: "ACF-0901",
  title: "Cálculo Diferencial",
  semester: "Primer semestre",
  credits: "5",
  theory: "3 horas",
  practice: "2 horas",
  classification: "Ciencias Básicas",
  teacherList: "Mtro. Guadalupe Cardozo Aguilar",
  teacherSheet: "Ing. Hiram Aranda Calderón",
  email: "haranda@itescam.edu.mx",

  prerequisites: [
    "Realizar operaciones algebraicas.",
    "Resolver ecuaciones de primer y segundo grado con una incógnita.",
    "Resolver sistemas de ecuaciones simultáneas con dos incógnitas.",
    "Reconocer razones e identidades trigonométricas.",
    "Identificar lugares geométricos como rectas y curvas."
  ],

  competencies: [
    "Comprender los números reales y sus propiedades.",
    "Identificar y analizar funciones.",
    "Interpretar límites y continuidad.",
    "Aplicar reglas de derivación.",
    "Resolver problemas mediante aplicaciones de la derivada."
  ],

  regulations: [
    "Se indica un requisito de asistencia del 80%.",
    "El pase de lista se realiza durante los primeros 10 minutos.",
    "Las justificaciones de inasistencia deben presentarse conforme a las disposiciones institucionales.",
    "Las actividades y evaluaciones deben cumplir las indicaciones establecidas por el docente.",
    "Las condiciones relacionadas con faltas grupales deben confirmarse con el reglamento institucional vigente."
  ],

  materials: ["Calculadora científica.", "Regla.", "Escuadras.", "Compás.", "Diccionario."],

  bibliography: [
    "Bibliografía pendiente de confirmar con el programa académico de referencia."
  ],

  exams: [
    { title: "Primer parcial", content: "Actividades 1.1.1 a 2.10.1." },
    { title: "Segundo parcial", content: "Actividades 3.1.1 a 4.8.1." }
  ],

  units: [
    {
      title: "Unidad 1. Números reales",
      topics: [
        "Recta numérica.",
        "Números reales.",
        "Propiedades de los números reales: tricotomía, transitividad, densidad y supremo.",
        "Intervalos y desigualdades.",
        "Valor absoluto."
      ]
    },
    {
      title: "Unidad 2. Funciones",
      topics: [
        "Variable, función, dominio, codominio y rango.",
        "Funciones inyectivas, suprayectivas y biyectivas.",
        "Representación gráfica de funciones reales.",
        "Funciones algebraicas: polinomiales, racionales e irracionales.",
        "Funciones trascendentes: trigonométricas y exponenciales.",
        "Funciones definidas por partes.",
        "Operaciones con funciones.",
        "Función inversa, logarítmica e inversas trigonométricas.",
        "Sucesiones.",
        "Función implícita."
      ]
    },
    {
      title: "Unidad 3. Límites y continuidad",
      topics: [
        "Límite de una sucesión.",
        "Límite de una función de variable real.",
        "Cálculo de límites.",
        "Propiedades de los límites.",
        "Límites laterales.",
        "Límites infinitos y al infinito.",
        "Asíntotas.",
        "Continuidad y discontinuidades."
      ]
    },
    {
      title: "Unidad 4. Derivadas",
      topics: [
        "Incrementos y razón de cambio.",
        "Interpretación geométrica de la derivada.",
        "Diferencial.",
        "Propiedades de la derivada.",
        "Regla de la cadena.",
        "Fórmulas de derivación.",
        "Derivadas de orden superior.",
        "Regla de L'Hôpital.",
        "Derivación implícita."
      ]
    },
    {
      title: "Unidad 5. Aplicaciones de la derivada",
      topics: [
        "Rectas tangente y normal.",
        "Teoremas de Rolle, Lagrange y valor medio.",
        "Funciones crecientes y decrecientes.",
        "Máximos y mínimos.",
        "Concavidad y puntos de inflexión.",
        "Análisis de variación de funciones.",
        "Aproximaciones mediante diferenciales.",
        "Problemas de optimización.",
        "Razones de cambio relacionadas."
      ]
    }
  ]
};

/* =========================================
   ELEMENTOS DE LA PÁGINA
========================================= */

const careerGrid = document.querySelector("#areas-career-grid");
const careerDetail = document.querySelector("#career-detail");
const careerImage = document.querySelector("#career-image");
const careerTitle = document.querySelector("#career-title");
const careerKicker = document.querySelector("#career-kicker");
const careerDescription = document.querySelector("#career-description");

const syllabusToggle = document.querySelector("#syllabus-toggle");
const syllabusArea = document.querySelector("#syllabus-area");
const semesterContent = document.querySelector("#semester-content");
const subjectDetail = document.querySelector("#subject-detail");

let selectedCareer = null;
let selectedSemester = null;

/* =========================================
   MOSTRAR UNA CARRERA
========================================= */

function showCareer(careerId, updateURL = true) {
  const career = areasCareers[careerId];

  if (!career) return;

  selectedCareer = careerId;
  selectedSemester = null;

  careerGrid.style.display = "none";
  careerDetail.classList.add("active");

  careerImage.src = career.image;
  careerImage.alt = career.name;
  careerTitle.textContent = career.name;
  careerKicker.textContent = "ÁREA DE FORMACIÓN";
  careerDescription.textContent = career.description;

  syllabusArea.classList.remove("active");
  semesterContent.classList.remove("active");
  subjectDetail.classList.remove("active");

  document.querySelectorAll(".semester-button").forEach(button => {
    button.classList.remove("active");
  });

  if (updateURL) {
    const url = new URL(window.location.href);
    url.searchParams.set("carrera", careerId);
    history.replaceState({}, "", url);
  }

  careerDetail.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================================
   ABRIR SYLLABUS
========================================= */

if (syllabusToggle) {
  syllabusToggle.addEventListener("click", () => {
    syllabusArea.classList.toggle("active");

    if (syllabusArea.classList.contains("active")) {
      syllabusArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

/* =========================================
   MOSTRAR UN SEMESTRE
========================================= */

function showSemester(semesterNumber) {
  if (!selectedCareer) return;

  const career = areasCareers[selectedCareer];
  const subjects = career.semesters[semesterNumber];

  if (!subjects) return;

  selectedSemester = semesterNumber;

  document.querySelectorAll(".semester-button").forEach(button => {
    button.classList.toggle(
      "active",
      Number(button.dataset.semester) === semesterNumber
    );
  });

  subjectDetail.classList.remove("active");
  subjectDetail.innerHTML = "";

  const subjectRows = subjects.map((subject, index) => {
    const teacher = getTeacher(selectedCareer, semesterNumber, index);

    return `
      <article class="subject-row">
        <div>
          <strong>${index + 1}. ${subject}</strong>
          <small>Docente: ${teacher} · Materia de ejemplo</small>
        </div>

        <button
          class="subject-button"
          type="button"
          data-subject="${encodeURIComponent(subject)}"
          data-teacher="${encodeURIComponent(teacher)}"
          data-index="${index}">
          CONSULTAR FICHA →
        </button>
      </article>
    `;
  }).join("");

  let extraExample = "";

  if (Number(semesterNumber) === 1) {
    extraExample = `
      <div class="example-note">
        <strong>Ficha académica de referencia:</strong>
        también puedes consultar el ejemplo de Cálculo Diferencial.
        Este documento se incluye para mostrar el funcionamiento de las fichas
        académicas y no confirma que pertenezca al plan oficial de esta carrera.
        <br><br>
        <button class="subject-button" type="button" id="calculus-example-button">
          VER EJEMPLO DE CÁLCULO DIFERENCIAL →
        </button>
      </div>
    `;
  }

  semesterContent.innerHTML = `
    <h3>Semestre ${semesterNumber}</h3>

    <p>
      Materias demostrativas de ${career.name}.
      Los nombres, docentes y contenidos deben verificarse con el programa
      oficial correspondiente antes de su publicación institucional.
    </p>

    <div class="subject-list">
      ${subjectRows}
    </div>

    ${extraExample}
  `;

  semesterContent.classList.add("active");

  semesterContent.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  semesterContent.querySelectorAll("[data-subject]").forEach(button => {
    button.addEventListener("click", () => {
      const subjectName = decodeURIComponent(button.dataset.subject);
      const teacherName = decodeURIComponent(button.dataset.teacher);
      const subjectIndex = Number(button.dataset.index);

      showGenericSubject(
        subjectName,
        semesterNumber,
        teacherName,
        subjectIndex
      );
    });
  });

  const calculusButton = document.querySelector("#calculus-example-button");

  if (calculusButton) {
    calculusButton.addEventListener("click", showCalculusExample);
  }
}

/* =========================================
   CREAR TABLA DE APOYO ACADÉMICO
   SIN COLUMNA DE ACTIVIDAD
========================================= */

function createAcademicSupportTable(subjectName, careerId, semesterNumber, subjectIndex) {
  const sections =
    academicSupportContent[careerId]?.[semesterNumber]?.[subjectIndex];

  if (!sections || sections.length === 0) {
    return `
      <div class="detail-section">
        <h4>Contenido de apoyo académico</h4>
        <p>
          El contenido de apoyo académico de esta materia se agregará
          cuando se cuente con los recursos correspondientes.
        </p>
      </div>
    `;
  }

  const isIndependenceSubject =
    careerId === "inteligencia-artificial" &&
    Number(semesterNumber) === 5 &&
    Number(subjectIndex) === 3;

  const rows = sections.map(section => {
    const topicRows = section.topics.map(topic => {
      const isTargetTopic =
        isIndependenceSubject &&
        String(topic.number).trim().startsWith("1.1");

      const materialCell = isTargetTopic
        ? `
          <a
            class="subject-button"
            href="visor-material.html"
            target="_blank"
            rel="noopener noreferrer">
            MATERIAL DEL MAESTRO ↗
          </a>
        `
        : `
          <span class="resource-pending">
            Material próximamente disponible.
          </span>
        `;

      const projectsCell = isTargetTopic
        ? `
          <a
            class="subject-button"
            href="proyectos.html?unidad=1-1">
            PROYECTOS DE LOS ALUMNOS →
          </a>
        `
        : `
          <span class="resource-pending">
            No hay proyectos disponibles.
          </span>
        `;

      return `
        <tr>
          <td>
            <strong>${topic.number}</strong>
            ${topic.content}
          </td>

          <td>${materialCell}</td>

          <td>${projectsCell}</td>
        </tr>
      `;
    }).join("");

    return `
      <tr class="support-group-row">
        <td colspan="3">${section.title}</td>
      </tr>

      ${topicRows}
    `;
  }).join("");

  return `
    <div class="detail-section academic-support-section">
      <h4>Contenido de apoyo académico</h4>

      <p>
        Consulta las unidades de aprendizaje, el material proporcionado
        por el maestro y los proyectos realizados por los alumnos.
      </p>

      <div class="academic-table-wrapper">
        <table class="academic-support-table">
          <thead>
            <tr>
              <th>Unidad</th>
              <th>Material del maestro</th>
              <th>Proyectos de los alumnos</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* =========================================
   FICHA DE UNA MATERIA GENERAL
========================================= */

function showGenericSubject(subjectName, semesterNumber, teacherName, subjectIndex) {
  const career = areasCareers[selectedCareer];

  const configuration = getSubjectConfiguration(
    selectedCareer,
    semesterNumber,
    subjectIndex
  );

  subjectDetail.innerHTML = `
    <span class="subject-code">FICHA ACADÉMICA DEMOSTRATIVA</span>

    <h3>${subjectName}</h3>

    <div class="detail-grid">

      <div class="detail-data">
        <span>Materia</span>
        <strong>${subjectName}</strong>
      </div>

      <div class="detail-data">
        <span>Carrera</span>
        <strong>${career.name}</strong>
      </div>

      <div class="detail-data">
        <span>Semestre</span>
        <strong>${semesterNumber}</strong>
      </div>

      <div class="detail-data">
        <span>Docente</span>
        <strong>${teacherName}</strong>
      </div>

      <div class="detail-data">
        <span>Correo del docente</span>
        <strong>${configuration.email}</strong>
      </div>

      <div class="detail-data">
        <span>Créditos</span>
        <strong>${configuration.credits}</strong>
      </div>

      <div class="detail-data">
        <span>Horas totales</span>
        <strong>${configuration.totalHours}</strong>
      </div>

    </div>

    <div class="detail-section">
      <h4>Descripción de la materia</h4>
      <p>
        La descripción oficial deberá incorporarse cuando se cuente con
        el programa académico correspondiente.
      </p>
    </div>

    <div class="detail-section">
      <h4>Competencias</h4>
      <p>
        Las competencias específicas, los resultados de aprendizaje
        y los criterios de evaluación están pendientes de confirmación.
      </p>
    </div>

    <div class="detail-section">
      <h4>Unidades y temas</h4>
      <p>
        La estructura de unidades y contenidos se agregará a partir
        del syllabus oficial de esta materia.
      </p>
    </div>

    ${createAcademicSupportTable(
      subjectName,
      selectedCareer,
      semesterNumber,
      subjectIndex
    )}

    <div class="detail-section">
      <h4>Materiales y bibliografía</h4>
      <p>
        Los recursos, libros, prácticas y bibliografía se incorporarán
        cuando estén disponibles y sean validados.
      </p>
    </div>

    <button class="detail-close" type="button" id="close-subject-detail">
      CERRAR FICHA
    </button>
  `;

  openSubjectDetail();
}

/* =========================================
   FICHA DE CÁLCULO DIFERENCIAL
========================================= */

function showCalculusExample() {
  const subject = calculusExample;

  subjectDetail.innerHTML = `
    <span class="subject-code">EJEMPLO DE REFERENCIA · ${subject.code}</span>

    <h3>${subject.title}</h3>

    <div class="example-note">
      <strong>Advertencia sobre los datos:</strong>
      esta ficha reproduce la información de referencia compartida para
      demostrar la presentación del syllabus. No se ha confirmado que
      corresponda a un programa oficial de CONALEP.
      Además, la información original menciona dos docentes diferentes:
      ${subject.teacherList} en un listado y ${subject.teacherSheet}
      en la ficha detallada. Es necesario confirmar cuál dato es correcto.
    </div>

    <div class="detail-grid">
      <div class="detail-data"><span>Clave</span><strong>${subject.code}</strong></div>
      <div class="detail-data"><span>Semestre</span><strong>${subject.semester}</strong></div>
      <div class="detail-data"><span>Créditos</span><strong>${subject.credits}</strong></div>
      <div class="detail-data"><span>Horas teóricas</span><strong>${subject.theory}</strong></div>
      <div class="detail-data"><span>Horas prácticas</span><strong>${subject.practice}</strong></div>
      <div class="detail-data"><span>Clasificación</span><strong>${subject.classification}</strong></div>
    </div>

    <div class="detail-section">
      <h4>Datos del docente en la referencia</h4>
      <p>
        Nombre en el listado: <strong>${subject.teacherList}</strong><br>
        Nombre en la ficha: <strong>${subject.teacherSheet}</strong><br>
        Correo incluido en la ficha: <strong>${subject.email}</strong>
      </p>
    </div>

    <div class="detail-section">
      <h4>Prerrequisitos</h4>
      <ul>${subject.prerequisites.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h4>Competencias</h4>
      <ul>${subject.competencies.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h4>Reglamento y criterios de referencia</h4>
      <ul>${subject.regulations.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h4>Materiales requeridos</h4>
      <ul>${subject.materials.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h4>Bibliografía</h4>
      <ul>${subject.bibliography.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h4>Parámetros de evaluación de referencia</h4>
      ${subject.exams.map(exam => `
        <p><strong>${exam.title}:</strong> ${exam.content}</p>
      `).join("")}
    </div>

    <div class="detail-section">
      <h4>Unidades y temas</h4>
      ${subject.units.map(unit => `
        <div style="margin-bottom:20px;">
          <strong style="color:#183d32;">${unit.title}</strong>
          <ul>${unit.topics.map(topic => `<li>${topic}</li>`).join("")}</ul>
        </div>
      `).join("")}
    </div>

    <div class="detail-section">
      <h4>Materiales de aprendizaje</h4>
      <p>
        Los documentos, ejercicios, presentaciones y prácticas deberán
        agregarse cuando se cuente con los archivos correspondientes.
      </p>
    </div>

    <button class="detail-close" type="button" id="close-subject-detail">
      CERRAR FICHA
    </button>
  `;

  openSubjectDetail();
}

/* =========================================
   ABRIR Y CERRAR FICHA
========================================= */

function openSubjectDetail() {
  subjectDetail.classList.add("active");

  subjectDetail.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  const closeButton = document.querySelector("#close-subject-detail");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      subjectDetail.classList.remove("active");
      subjectDetail.innerHTML = "";
    });
  }
}

/* =========================================
   EVENTOS DE SEMESTRES
========================================= */

document.querySelectorAll(".semester-button").forEach(button => {
  button.addEventListener("click", () => {
    showSemester(Number(button.dataset.semester));
  });
});

/* =========================================
   EVENTOS DE CARRERAS
========================================= */

document.querySelectorAll("[data-area-career]").forEach(button => {
  button.addEventListener("click", () => {
    showCareer(button.dataset.areaCareer);
  });
});

/* =========================================
   ABRIR CARRERA DESDE LA URL
========================================= */

const params = new URLSearchParams(window.location.search);
const careerFromURL = params.get("carrera");

if (careerFromURL && areasCareers[careerFromURL]) {
  showCareer(careerFromURL, false);
}
