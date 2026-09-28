const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.getElementById("site-navigation");
const siteHeader = document.querySelector(".site-header");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

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

if (siteHeader) {
  let scrollFrame = null;

  const updateHeader = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    scrollFrame = null;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (scrollFrame == null) scrollFrame = window.requestAnimationFrame(updateHeader);
    },
    { passive: true },
  );

  updateHeader();
}

const revealElements = document.querySelectorAll(
  ".section-heading, .service-card, .kitchen-grid figure, .hours-section__copy, .hours-list, .payment-card, .menu-summary",
);

if (!reducedMotionQuery.matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.12 },
  );

  revealElements.forEach((element) => {
    const siblings = Array.from(element.parentElement?.children || []);
    const siblingIndex = Math.max(0, siblings.indexOf(element));
    element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex, 2) * 60}ms`);
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
