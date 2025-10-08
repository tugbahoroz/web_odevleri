const githubApi = "https://api.github.com/users/";
const sayfa = document.getElementById("sayfa");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Kullanıcı profili al
async function profilBilgisiAl(profil) {
  try {
    const response = await fetch(githubApi + profil);
    if (!response.ok) throw new Error("Kullanıcı bulunamadı!");
    const responseData = await response.json();

    profilGoruntule(responseData);
    reposGetir(profil);
  } catch (error) {
    sayfa.innerHTML = `<p style="color:red; font-size:1.2rem;">${error.message}</p>`;
  }
}

// Repos bilgilerini al
async function reposGetir(profil) {
  try {
    const response = await fetch(githubApi + profil + "/repos");
    if (!response.ok) throw new Error("Repo bilgileri alınamadı!");
    const responseData = await response.json();

    reposBilgileriEkle(responseData);
  } catch (error) {
    console.error(error);
  }
}

// Profil görüntüleme
function profilGoruntule(profil) {
  const cardHTML = `
    <div class="card">
        <div>
            <img class="avatar" src="${profil.avatar_url}" alt="${profil.name || profil.login}"/>
        </div>
        <div class="profil-bilgi">
            <h2>${profil.name || profil.login}</h2>
            <p>${profil.bio || ""}</p>
            <ul class="bilgi">
                <li><strong>${profil.followers} Takipçi</strong></li>
                <li><strong>${profil.following} Takip</strong></li>
                <li><strong>${profil.public_repos} Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
  `;
  sayfa.innerHTML = cardHTML;
}

// Repo bilgilerini ekleme
function reposBilgileriEkle(repos) {
  const reposEl = document.getElementById("repos");
  reposEl.innerHTML = ""; // eski içeriği temizle

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;
      reposEl.appendChild(repoEl);
    });
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const profil = search.value.trim();
  if (profil) {
    profilBilgisiAl(profil);
    search.value = "";
  }
});
