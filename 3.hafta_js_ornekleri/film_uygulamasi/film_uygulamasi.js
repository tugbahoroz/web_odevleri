const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const sortPopularBtn = document.getElementById("sort-popular");
const sortAlphaBtn = document.getElementById("sort-alpha");

// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalOverview = document.getElementById("modal-overview");
const modalVote = document.getElementById("modal-vote");
const closeModal = document.querySelector(".close");

let filmsData = [];

// Başlangıçta popüler filmler
fetchFilms(APIURL);

// Film bilgilerini API üzerinden al
async function fetchFilms(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  filmsData = responseData.results;
  displayFilms(filmsData);
}

function displayFilms(films) {
  main.innerHTML = "";
  films.forEach((film) => {
    const { poster_path, title, vote_average, overview } = film;

    const filmEl = document.createElement("div");
    filmEl.classList.add("movie");

    filmEl.innerHTML = `
      <img src="${IMGPATH + poster_path}" alt="${title}" />
      <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getVoteClass(vote_average)}">${vote_average}</span>
      </div>
      <button class="details-btn">Detay</button>
      <div class="overview">
          <h3>Açıklama:</h3>
          ${overview}
      </div>
    `;
    main.appendChild(filmEl);

    // Detay butonu modal aç
    const detailsBtn = filmEl.querySelector(".details-btn");
    detailsBtn.addEventListener("click", () => {
      modal.style.display = "block";
      modalTitle.innerText = title;
      modalOverview.innerText = overview;
      modalVote.innerText = vote_average;
    });
  });
}

// Film oy puanına göre renk
function getVoteClass(vote) {
  if (vote >= 7) return "green";
  else if (vote >= 5) return "orange";
  else return "red";
}

// Form submit (arama)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    fetchFilms(SEARCHAPI + searchTerm);
    search.value = "";
  }
});

// Modal kapatma
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});

// Sırala popüler
sortPopularBtn.addEventListener("click", () => {
  const sorted = [...filmsData].sort((a,b) => b.popularity - a.popularity);
  displayFilms(sorted);
});

// Sırala A-Z
sortAlphaBtn.addEventListener("click", () => {
  const sorted = [...filmsData].sort((a,b) => a.title.localeCompare(b.title));
  displayFilms(sorted);
});
