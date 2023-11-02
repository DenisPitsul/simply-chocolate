(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-buy-modal-open]"),
      closeModalBtn: document.querySelector("[data-buy-modal-close]"),
      modal: document.querySelector("[data-buy-modal]"),
    };
  
    refs.openModalBtns.forEach((btn) => {
      btn.addEventListener("click", toggleModal);
    });
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("buy-backdrop-is-hidden");
      console.log('111')
    }
  })();