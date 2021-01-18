const contentEl = document.querySelectorAll('.content');

const liEl = document.querySelectorAll('li');
liEl.forEach((li, idx) => {
  li.addEventListener('click', () => {
    removeActiveOrShow();
    li.classList.add('active');
    contentEl[idx].classList.add('show');
    console.log(contentEl);
    console.log(liEl);
  });
});
function removeActiveOrShow() {
  liEl.forEach(li => li.classList.remove('active'));
  contentEl.forEach(content => content.classList.remove('show'));
}
