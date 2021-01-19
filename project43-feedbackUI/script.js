const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const ratingsContainer = document.querySelector('.ratings-container');
const panel = document.getElementById('panel');

let selectedRating = 'Satiesfied';
//event bubbling
ratingsContainer.addEventListener('click', e => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', e => {
  panel.innerHTML = `
  <li class='fas fa-heart'></li> 
  <strong>Thank you!</strong>
  <br/>
  <strong>FeedBack: ${selectedRating}</strong>
  <p>We'll use your feed back to improve our customer support</p>
  `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
