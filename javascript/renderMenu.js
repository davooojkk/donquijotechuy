import { cartaData } from "./cartaData.js";

export function renderMenu() {

  const nombresAmigables = {
    MARISCOSYPESCADOS: "Mariscos y Pescados",
    MENUKIDS: "Menú Kids"
  };

  const menuContainer = document.getElementById("carta");
  menuContainer.innerHTML = "";

  Object.entries(cartaData).forEach(([categoriaNombre, categoriaData]) => {

    const categoria = document.createElement("section");

    // HEADER DE CATEGORIA
    const header = document.createElement("div");
    header.classList.add("categoria-header");

    const titulo = document.createElement("p");
    titulo.classList.add("titulos");


    titulo.textContent = nombresAmigables[categoriaNombre]
      || categoriaNombre.charAt(0) + categoriaNombre.slice(1).toLowerCase();

    const flecha = document.createElement("img");
    flecha.src = "./img/icons/flecha.svg";
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
        plato.innerHTML = `<span class="nombre">${item.nombre}</span>  <br> <span class="precio">$${item.precio}</span>`;

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

        subData.items.forEach(item => {

          const plato = document.createElement("p");
          plato.classList.add("body-text");

          if (item.precio) {
            plato.innerHTML = `<span class="nombre">${item.nombre}</span>  <br> <span class="precio">$${item.precio}</span>`;
          }

          if (item.medioMetro) {
            plato.innerHTML = `<span class="nombre">${item.nombre}</span> <br> 1/2M: <span class="precio">$${item.medioMetro}</span> | Porción: <span class="precio">$${item.porcion}</span>`;
          }

          if (!item.precio && !item.medioMetro) {
            plato.textContent = item.nombre;
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