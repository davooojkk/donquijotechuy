const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.getElementById("site-navigation");

if (menuToggle && siteNavigation) {
  const desktopQuery = window.matchMedia("(min-width: 64rem)");

  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    siteNavigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen && !desktopQuery.matches);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (
      menuToggle.getAttribute("aria-expanded") === "true" &&
      !siteNavigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  desktopQuery.addEventListener("change", () => setMenuOpen(false));
}
