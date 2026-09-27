import { deliveryData } from "./deliveryData.js";

export function renderDelivery() {
  const nombresAmigables = {
    MARISCOS: "Mariscos y Pescados",
    SANDWICH: "Sándwiches",
    BAURU: "Baurú",
  };

  const menuContainer = document.getElementById("carta");
  if (!menuContainer) return;

  menuContainer.replaceChildren();

  Object.entries(deliveryData).forEach(([categoriaNombre, categoriaData]) => {
    const categoria = document.createElement("section");
    const categoriaId = `categoria-${categoriaNombre.toLowerCase()}`;

    // HEADER DE CATEGORIA
    const header = document.createElement("button");
    header.type = "button";
    header.classList.add("categoria-header");
    header.setAttribute("aria-expanded", "false");
    header.setAttribute("aria-controls", `${categoriaId}-contenido`);

    const titulo = document.createElement("span");
    titulo.classList.add("titulos");

    titulo.textContent =
      nombresAmigables[categoriaNombre] ||
      categoriaNombre.charAt(0) + categoriaNombre.slice(1).toLowerCase();

    const flecha = document.createElement("img");
    flecha.src = "./img/icons/flecha.svg";
    flecha.alt = "";
    flecha.setAttribute("aria-hidden", "true");
    flecha.classList.add("flecha");

    header.appendChild(titulo);
    header.appendChild(flecha);

    // CONTENIDO OCULTO
    const contenido = document.createElement("div");
    contenido.classList.add("contenido-categoria");
    contenido.id = `${categoriaId}-contenido`;
    contenido.hidden = true;

    // LOGICA PARA ITEMS SIMPLES
    if (categoriaData.tipo === "simple") {
      categoriaData.items.forEach((item) => {
        const plato = document.createElement("p");
        plato.classList.add("body-text");
        const precio =
          item.precio != null
            ? ` <br> <span class="precio">$${item.precio}</span>`
            : "";
        plato.innerHTML = `<span class="nombre">${item.nombre}</span>${precio}`;

        contenido.appendChild(plato);
      });
    }

    // LOGICA PARA SUBCATEGORIAS
    if (categoriaData.tipo === "subcategorias") {
      Object.entries(categoriaData.subcategorias).forEach(([subNombre, subData]) => {
        const subtitulo = document.createElement("p");
        subtitulo.classList.add("subtitulos");
        subtitulo.textContent = subNombre; // Podés hacer otro map si querés nombres amigables de subcategorías

        contenido.appendChild(subtitulo);

        subData.items.forEach((item) => {
          const plato = document.createElement("p");
          plato.classList.add("body-text");

          if (item.medioMetro != null) {
            plato.innerHTML = `<span class="nombre">${item.nombre}</span> <br> 1/2 m: <span class="precio">$${item.medioMetro}</span>`;
          } else if (item.precio != null) {
            plato.innerHTML = `<span class="nombre">${item.nombre}</span> <br> <span class="precio">$${item.precio}</span>`;
          } else {
            plato.textContent = item.nombre;
          }

          contenido.appendChild(plato);
        });
      });
    }

    // EVENTO PARA ABRIR / CERRAR
    header.addEventListener("click", () => {
      const estaAbierto = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!estaAbierto));
      contenido.hidden = estaAbierto;
      flecha.style.transform = estaAbierto ? "rotate(0deg)" : "rotate(180deg)";
    });

    categoria.appendChild(header);
    categoria.appendChild(contenido);

    menuContainer.appendChild(categoria);
  });
}
