const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.parentNode.classList.toggle('active');
  });
});
