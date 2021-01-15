const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);
function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1610596442736-304ad93c14dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="" />`;
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaenulla placeat voluptas dolores labore eius!';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />';
  name.innerHTML = 'john doe';
  date.innerHTML = 'Oct 8th 2020';

  animated_bgs.forEach(bg => {
    bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach(text => {
    text.classList.remove('animated-bg-text');
  });
}
