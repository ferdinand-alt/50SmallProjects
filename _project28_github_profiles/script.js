const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

function createUserCard(user) {
    const cardHTML = `<div class="card">
        <div>
          <img
            src=${user.avatar_url}
            alt=${user.login}
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.login}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            <a href="#" class="repo">Repo 1</a>
            <a href="#" class="repo">Repo 2</a>
            <a href="#" class="repo">Repo 3</a>
          </div>
        </div>
      </div>`;
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    // als je submit krijg je via deze weg ook de info
    console.log(user);

    if (user) {
        getUser(user)
        search.value = ''
    }
    
})

async function getRepos(username) {
    try {
      const { data } = await axios(APIURL + username + '/repos');

      createUserCard(data);
      getRepos(username);
    } catch (err) {
        createErrorCard("Problem fetching repos");
    }
}
