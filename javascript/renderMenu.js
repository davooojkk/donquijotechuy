import { cartaData } from "./cartaData.js";

export function renderMenu() {

  const menuContainer = document.getElementById("carta");
  menuContainer.innerHTML = "";

  Object.entries(cartaData).forEach(([categoriaNombre, categoriaData]) => {

    const categoria = document.createElement("section");

    // HEADER DE CATEGORIA
    const header = document.createElement("div");
    header.classList.add("categoria-header");

    const titulo = document.createElement("p");
    titulo.classList.add("titulos");
    titulo.textContent = categoriaNombre;

    const flecha = document.createElement("img");
    flecha.src = "/img/icons/flecha.svg";
    flecha.classList.add("flecha");

    header.appendChild(titulo);
    header.appendChild(flecha);

    // CONTENIDO OCULTO
    const contenido = document.createElement("div");
    contenido.classList.add("contenido-categoria");
    contenido.style.display = "none";

    // LOGICA PARA ITEMS SIMPLES
    if (categoriaData.tipo === "simple") {

      categoriaData.items.forEach(item => {

        const plato = document.createElement("p");
        plato.classList.add("body-text");
        plato.textContent = `${item.nombre} - $${item.precio}`;

        contenido.appendChild(plato);

      });

    }

    // LOGICA PARA SUBCATEGORIAS
    if (categoriaData.tipo === "subcategorias") {

      Object.entries(categoriaData.subcategorias).forEach(([subNombre, subData]) => {

        const subtitulo = document.createElement("p");
        subtitulo.classList.add("subtitulos");
        subtitulo.textContent = subNombre;

        contenido.appendChild(subtitulo);

        subData.items.forEach(item => {

          const plato = document.createElement("p");
          plato.classList.add("body-text");

          if (item.precio) {
            plato.textContent = `${item.nombre} - $${item.precio}`;
          }

          if (item.medioMetro) {
            plato.textContent = `${item.nombre} - Medio: $${item.medioMetro} | Porción: $${item.porcion}`;
          }

          contenido.appendChild(plato);

        });

      });

    }

    // EVENTO PARA ABRIR / CERRAR
    header.addEventListener("click", () => {

      if (contenido.style.display === "none") {

        contenido.style.display = "block";
        flecha.style.transform = "rotate(180deg)";

      } else {

        contenido.style.display = "none";
        flecha.style.transform = "rotate(0deg)";

      }

    });

    categoria.appendChild(header);
    categoria.appendChild(contenido);

    menuContainer.appendChild(categoria);

  });

}
