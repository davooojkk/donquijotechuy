const priceFormatter = new Intl.NumberFormat("es-UY", {
  maximumFractionDigits: 0,
});

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function categoryLabel(name, friendlyNames) {
  return (
    friendlyNames[name] ||
    name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase("es-UY")
  );
}

function formatPrice(value) {
  if (value == null || value === "") return null;
  return `$${typeof value === "number" ? priceFormatter.format(value) : value}`;
}

function appendPrice(container, label, value) {
  const formattedPrice = formatPrice(value);
  if (!formattedPrice) return;

  const price = document.createElement("span");
  if (label) {
    const priceLabel = document.createElement("small");
    priceLabel.textContent = label;
    price.appendChild(priceLabel);
  }
  price.append(document.createTextNode(formattedPrice));
  container.appendChild(price);
}

function createDishCard(item, showPortion) {
  const card = document.createElement("article");
  card.classList.add("dish-card");

  const copy = document.createElement("div");
  copy.classList.add("dish-card__copy");

  const name = document.createElement("h4");
  name.textContent = item.nombre;
  copy.appendChild(name);

  const descriptionText =
    typeof item.descripcion === "string" ? item.descripcion.trim() : "";

  if (descriptionText) {
    const description = document.createElement("p");
    description.classList.add("dish-card__description");
    description.textContent = descriptionText;
    copy.appendChild(description);
  }

  const prices = document.createElement("div");
  prices.classList.add("dish-card__prices");

  if (item.medioMetro != null) {
    appendPrice(prices, "1/2 metro", item.medioMetro);
    if (showPortion && item.porcion != null) appendPrice(prices, "Porción", item.porcion);
  } else {
    appendPrice(prices, "", item.precio);
  }

  card.appendChild(copy);
  if (prices.childElementCount) {
    card.appendChild(prices);
  } else {
    card.classList.add("dish-card--no-price");
  }

  return card;
}

function countItems(category) {
  if (category.tipo === "simple") return category.items?.length || 0;
  return Object.values(category.subcategorias || {}).reduce(
    (total, subcategory) => total + (subcategory.items?.length || 0),
    0,
  );
}

function createDishGrid(items, showPortion) {
  const grid = document.createElement("div");
  grid.classList.add("dish-grid");
  items.forEach((item) => grid.appendChild(createDishCard(item, showPortion)));
  return grid;
}

export function renderCarta(data, options = {}) {
  const menuContainer = document.getElementById("carta");
  const categoryContainer = document.getElementById("categorias");
  if (!menuContainer || !categoryContainer) return;

  const friendlyNames = options.friendlyNames || {};
  const showPortion = options.showPortion !== false;
  const categories = Object.entries(data).filter(([, category]) =>
    ["simple", "subcategorias"].includes(category.tipo),
  );

  if (!categories.length) {
    menuContainer.innerHTML = '<p class="menu-empty">La carta no está disponible en este momento.</p>';
    menuContainer.setAttribute("aria-busy", "false");
    return;
  }

  const categoryBySlug = new Map(
    categories.map(([name, category]) => [slugify(name), { name, category }]),
  );
  const initialSlug = decodeURIComponent(window.location.hash.slice(1));
  let selectedSlug = categoryBySlug.has(initialSlug)
    ? initialSlug
    : slugify(categories[0][0]);

  const buttons = new Map();

  function renderSelectedCategory() {
    const selected = categoryBySlug.get(selectedSlug);
    if (!selected) return;

    const { name, category } = selected;
    const fragment = document.createDocumentFragment();
    const intro = document.createElement("header");
    intro.classList.add("category-intro");

    const heading = document.createElement("h2");
    heading.id = `categoria-${selectedSlug}`;
    heading.textContent = categoryLabel(name, friendlyNames);

    const itemCount = countItems(category);
    const count = document.createElement("p");
    count.textContent = `${itemCount} ${itemCount === 1 ? "opción" : "opciones"}`;

    intro.append(heading, count);
    fragment.appendChild(intro);

    if (category.tipo === "simple") {
      fragment.appendChild(createDishGrid(category.items || [], showPortion));
    } else {
      const subcategoryList = document.createElement("div");
      subcategoryList.classList.add("subcategory-list");

      Object.entries(category.subcategorias || {}).forEach(([subcategoryName, subcategory]) => {
        const section = document.createElement("section");
        section.classList.add("subcategory");

        const subheading = document.createElement("h3");
        subheading.textContent = subcategoryName;

        section.append(subheading, createDishGrid(subcategory.items || [], showPortion));
        subcategoryList.appendChild(section);
      });

      fragment.appendChild(subcategoryList);
    }

    menuContainer.replaceChildren(fragment);
    menuContainer.setAttribute("aria-labelledby", heading.id);
    menuContainer.setAttribute("aria-busy", "false");

    buttons.forEach((button, slug) => {
      button.setAttribute("aria-pressed", String(slug === selectedSlug));
    });
  }

  categories.forEach(([name]) => {
    const slug = slugify(name);
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("category-button");
    button.textContent = categoryLabel(name, friendlyNames);
    button.setAttribute("aria-controls", "carta");
    button.setAttribute("aria-pressed", String(slug === selectedSlug));
    button.addEventListener("click", () => {
      if (slug === selectedSlug) return;
      selectedSlug = slug;
      window.history.replaceState(null, "", `#${slug}`);
      renderSelectedCategory();
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
    buttons.set(slug, button);
    categoryContainer.appendChild(button);
  });

  window.addEventListener("hashchange", () => {
    const nextSlug = decodeURIComponent(window.location.hash.slice(1));
    if (categoryBySlug.has(nextSlug) && nextSlug !== selectedSlug) {
      selectedSlug = nextSlug;
      renderSelectedCategory();
    }
  });

  renderSelectedCategory();
}
