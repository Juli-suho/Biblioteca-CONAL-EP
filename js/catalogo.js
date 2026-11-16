
/* =========================================
   BIBLIOTECA CONALEP
   CATÁLOGO DIGITAL
========================================= */

let books = [];

const $ = (selector) => document.querySelector(selector);

const normalize = (value) =>
  String(value || "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const bookGrid = $("#book-grid");
const catalogSearch = $("#catalog-search");
const categoryFilter = $("#category-filter");
const resultsCount = $("#results-count");
const detailDialog = $("#detail-dialog");
const readerDialog = $("#reader-dialog");


/* =========================================
   FUNCIONES DEL CATÁLOGO
========================================= */

function availableFiles(book) {
  return (book.archivos || []).filter(file => file.ruta);
}

function bookMatches(book, query) {
  const fileNames = availableFiles(book)
    .map(file => file.ruta)
    .join(" ");

  const content = [
    book.titulo,
    book.autor,
    book.categoria,
    book.descripcion,
    ...(book.palabrasClave || []),
    fileNames
  ].join(" ");

  return normalize(content).includes(normalize(query));
}

function getFilteredBooks(
  query = catalogSearch.value,
  category = categoryFilter.value
) {
  return books.filter(book =>
    (!query || bookMatches(book, query)) &&
    (
      category === "Todos" ||
      normalize(book.categoria) === normalize(category)
    )
  );
}

function goToCatalog() {
  location.hash = "catalogo";

  $("#catalogo").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================================
   CREAR TARJETAS DE MATERIALES
========================================= */

function makeBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";

  const cover = document.createElement("div");
  cover.className = "book-cover";

  if (book.portada) {
    const img = document.createElement("img");

    img.src = book.portada;
    img.alt = `Portada de ${book.titulo}`;
    img.loading = "lazy";

    img.onerror = () => {
      cover.replaceChildren();

      const fallback = document.createElement("span");
      fallback.textContent = "CONALEP · BIBLIOTECA DIGITAL";

      cover.append(fallback);
    };

    cover.append(img);
  } else {
    const fallback = document.createElement("span");
    fallback.textContent = "CONALEP · BIBLIOTECA DIGITAL";
    cover.append(fallback);
  }

  const info = document.createElement("div");
  info.className = "book-info";

  const category = document.createElement("span");
  category.className = "book-category";
  category.textContent = book.categoria || "General";

  const title = document.createElement("h3");
  title.textContent = book.titulo || "Material sin título";

  const author = document.createElement("p");
  author.textContent = book.autor || "Autor no especificado";

  const actions = document.createElement("div");
  actions.className = "book-actions";

  const detail = document.createElement("button");
  detail.type = "button";
  detail.textContent = "Consultar";
  detail.addEventListener("click", () => openDetails(book));

  actions.append(detail);

  const pdf = availableFiles(book).find(
    file => String(file.tipo || "").toUpperCase() === "PDF"
  );

  if (pdf) {
    const read = document.createElement("button");

    read.type = "button";
    read.className = "secondary";
    read.textContent = "Leer PDF";

    read.addEventListener("click", () => openReader(book, pdf));

    actions.append(read);
  }

  info.append(category, title, author, actions);
  card.append(cover, info);

  return card;
}


/* =========================================
   MOSTRAR MATERIALES
========================================= */

function renderBooks() {
  const filtered = getFilteredBooks();

  bookGrid.replaceChildren();

  resultsCount.textContent =
    `${filtered.length} ${
      filtered.length === 1
        ? "material encontrado"
        : "materiales encontrados"
    }`;

  if (!filtered.length) {
    const empty = document.createElement("div");

    empty.className = "empty-state";
    empty.textContent =
      "No encontramos materiales con esos criterios. Prueba con otra palabra o categoría.";

    bookGrid.append(empty);
    return;
  }

  filtered.forEach(book => {
    bookGrid.append(makeBookCard(book));
  });
}


/* =========================================
   DETALLES DE LOS MATERIALES
========================================= */

function openDetails(book) {
  const content = $("#detail-content");
  content.replaceChildren();

  const layout = document.createElement("div");
  layout.className = "detail-layout";

  if (book.portada) {
    const img = document.createElement("img");

    img.src = book.portada;
    img.alt = `Portada de ${book.titulo}`;

    img.onerror = () => {
      img.style.display = "none";
    };

    layout.append(img);
  }

  const body = document.createElement("div");

  const tag = document.createElement("span");
  tag.className = "book-category";
  tag.textContent = book.categoria || "General";

  const title = document.createElement("h2");
  title.textContent = book.titulo || "Material";

  const author = document.createElement("p");
  author.textContent =
    `Autor: ${book.autor || "No especificado"}`;

  const description = document.createElement("p");
  description.textContent =
    book.descripcion || "No hay descripción disponible.";

  const fileTitle = document.createElement("p");
  fileTitle.textContent = "Recursos disponibles";

  const files = document.createElement("div");
  files.className = "detail-files";

  const resources = availableFiles(book);

  if (!resources.length) {
    const none = document.createElement("p");

    none.textContent =
      "Este registro todavía no tiene archivos adjuntos.";

    files.append(none);
  }

  resources.forEach(file => {
    const path = encodeURI(file.ruta);
    const type = String(file.tipo || "").toUpperCase();

    if (type === "PDF") {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent = "Leer PDF";

      button.addEventListener("click", () => {
        openReader(book, file);
      });

      files.append(button);
    }

    const link = document.createElement("a");

    link.href = path;
    link.download = file.ruta.split("/").pop();
    link.textContent = `Descargar ${file.tipo || "archivo"}`;

    files.append(link);
  });

  body.append(
    tag,
    title,
    author,
    description,
    fileTitle,
    files
  );

  layout.append(body);
  content.append(layout);

  detailDialog.showModal();
}


/* =========================================
   LECTOR PDF
========================================= */

function openReader(book, file) {
  $("#reader-title").textContent = book.titulo;

  $("#pdf-frame").src = encodeURI(file.ruta);

  if (detailDialog.open) {
    detailDialog.close();
  }

  readerDialog.showModal();
}


/* =========================================
   RESULTADOS RÁPIDOS DEL BUSCADOR
========================================= */

function updateQuickResults(query) {
  const panel = $("#quick-results");

  panel.replaceChildren();

  if (!query.trim()) {
    panel.hidden = true;
    return;
  }

  const matches = books
    .filter(book => bookMatches(book, query))
    .slice(0, 5);

  if (!matches.length) {
    const no = document.createElement("div");

    no.className = "quick-empty";
    no.textContent = "No se encontraron coincidencias.";

    panel.append(no);

  } else {
    matches.forEach(book => {
      const button = document.createElement("button");
      button.type = "button";

      const title = document.createElement("strong");
      title.textContent = book.titulo;

      const category = document.createElement("small");
      category.textContent = book.categoria || "General";

      button.append(title, category);

      button.addEventListener("click", () => {
        $("#main-search").value = book.titulo;

        catalogSearch.value = book.titulo;
        categoryFilter.value = "Todos";

        renderBooks();

        panel.hidden = true;

        openDetails(book);
      });

      panel.append(button);
    });
  }

  panel.hidden = false;
}


/* =========================================
   CARGAR CATÁLOGO JSON
========================================= */

async function loadCatalog() {
  try {
    const response = await fetch("datos/libros.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    books = await response.json();

    if (!Array.isArray(books)) {
      throw new Error("El archivo JSON no contiene una lista válida.");
    }

    const categories = [
      ...new Set(
        books
          .map(book => book.categoria)
          .filter(Boolean)
      )
    ].sort((a, b) => a.localeCompare(b, "es"));

    categories.forEach(category => {
      const option = document.createElement("option");

      option.value = category;
      option.textContent = category;

      categoryFilter.append(option);
    });

    const totalBooks = $("#total-books");
    const totalCategories = $("#total-categories");
    const totalFiles = $("#total-files");

    if (totalBooks) {
      totalBooks.textContent = books.length;
    }

    if (totalCategories) {
      totalCategories.textContent = categories.length;
    }

    if (totalFiles) {
      totalFiles.textContent = books.reduce(
        (sum, book) => sum + availableFiles(book).length,
        0
      );
    }

    renderBooks();

  } catch (error) {
    console.error("No se pudo cargar el catálogo:", error);

    resultsCount.textContent =
      "No fue posible cargar el catálogo.";

    const empty = document.createElement("div");

    empty.className = "empty-state";
    empty.textContent =
      "Ocurrió un problema al cargar los materiales. Comprueba que datos/libros.json esté publicado junto con el sitio.";

    bookGrid.replaceChildren(empty);
  }
}


/* =========================================
   EVENTOS DEL CATÁLOGO
========================================= */

catalogSearch.addEventListener("input", renderBooks);

categoryFilter.addEventListener("change", renderBooks);


/* =========================================
   LIMPIAR FILTROS
========================================= */

$("#clear-filters").addEventListener("click", () => {
  catalogSearch.value = "";
  categoryFilter.value = "Todos";

  renderBooks();
});


/* =========================================
   BUSCADOR PRINCIPAL
========================================= */

$("#search-form").addEventListener("submit", event => {
  event.preventDefault();

  const query = $("#main-search").value.trim();

  catalogSearch.value = query;
  categoryFilter.value = "Todos";

  $("#quick-results").hidden = true;

  const matches = books.filter(book =>
    !query || bookMatches(book, query)
  );

  renderBooks();

  if (query && matches.length === 1) {
    openDetails(matches[0]);
  } else {
    goToCatalog();
  }
});


/* =========================================
   RESULTADOS EN TIEMPO REAL
========================================= */

$("#main-search").addEventListener("input", event => {
  updateQuickResults(event.target.value);
});


/* =========================================
   CERRAR VENTANAS
========================================= */

$("#dialog-close").addEventListener("click", () => {
  detailDialog.close();
});

$("#reader-close").addEventListener("click", () => {
  readerDialog.close();
  $("#pdf-frame").src = "about:blank";
});


detailDialog.addEventListener("click", event => {
  if (event.target === detailDialog) {
    detailDialog.close();
  }
});


readerDialog.addEventListener("click", event => {
  if (event.target === readerDialog) {
    readerDialog.close();
    $("#pdf-frame").src = "about:blank";
  }
});


/* =========================================
   TECLA ESCAPE
========================================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    $("#quick-results").hidden = true;
  }
});


/* =========================================
   INICIAR BIBLIOTECA
========================================= */

loadCatalog();
