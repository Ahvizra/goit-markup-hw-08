(() => {
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