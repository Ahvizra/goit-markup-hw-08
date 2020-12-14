/* (() => {
  const refs = {
    openMobilBtn: document.querySelector('[mobile-open]'),
    closeMobilBtn: document.querySelector('[mobile-close]'),
    mobile: document.querySelector('[mobile]'),
  };

  refs.openMobilBtn.addEventListener('click', toggleMobil);
  refs.closeMobilBtn.addEventListener('click', toggleMobil);

  function toggleModal() {
    refs.mobil.classList.toggle('is-close');
  }
})();
 */
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("close-btn");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();