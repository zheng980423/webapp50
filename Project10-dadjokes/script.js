const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => {
  generateJoke();
});
generateJoke();

//使用.then（）
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerText = data.joke;
//     });
// }

//使用async await的方法
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerText = data.joke;
}
