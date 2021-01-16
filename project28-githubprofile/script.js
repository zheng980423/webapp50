const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const avata = document.querySelector('.avatar');
const main = document.getElementById('main');

async function getUser(usename) {
  try {
    const { data } = await axios(APIURL + usename);
    createUserCard(data);
    getReps(usename);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getReps(usename) {
  try {
    const { data } = await axios(APIURL + usename + '/repos?sort=created');

    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}
function createUserCard(user) {
  const cardHTML = ` <div class="card">
  <div>
    <img
      src=${user.avatar_url}
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.login}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>
        ${user.followers}
        <strong>Followes</strong>
      </li>
      <li>
        ${user.following}
        <strong>Following</strong>
      </li>
      <li>
        ${user.public_repos}
        <strong>Repos</strong>
      </li>
    </ul>
    <div class="repos" id='repos'>
     
    </div>
  </div>
</div>`;
  main.innerHTML = cardHTML;
}

function createErrorCard(meassage) {
  const carHTML = `
  <div class='card'>
    <h1>${meassage}</h1>
  </div>`;
  main.innerHTML = carHTML;
}
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  repos.slice(0, 10).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = `_blank`;
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});
