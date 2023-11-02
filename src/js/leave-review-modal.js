(() => {
    const refs = {
        openReviewModalBtn: document.querySelector('[data-review-modal-open]'),
        closeReviewModalBtn: document.querySelector('[data-review-modal-close]'),
        reviewModal: document.querySelector('[data-review-modal]'),
    };

    refs.openReviewModalBtn.addEventListener('click', toggleReviewModal);
    refs.closeReviewModalBtn.addEventListener('click', toggleReviewModal);

    function toggleReviewModal() {
        refs.reviewModal.classList.toggle('review-modal-backdrop-is-hidden');
    }
})();