const apikey = "BURAYA_KENDI_API_KEYINIZI_YAZIN"; 
const container = document.getElementById("container");
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// API URL
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=tr`;

// API’den veri çek
async function lokasyonBilgisi(city) {
  try {
    const response = await fetch(url(city));
    const data = await response.json();

    if (data.cod === "404") {
      uyariMesaji("Konum bulunamadı!");
      return;
    }

    // Hava durumu bilgilerini göster
    havaDurumuBilgisi(data);
  } catch (error) {
    uyariMesaji("Sunucuya bağlanılamıyor!");
  }
}

// Hava durumu bilgilerini oluştur
function havaDurumuBilgisi(data) {
  const temp = Math.floor(data.main.temp - 273.15);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
    <h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}" />
      ${temp}°C
    </h2>
    <small>${data.weather[0].description}</small>
    <small>${data.name}, ${data.sys.country}</small>
    <small>Nem: ${data.main.humidity}% | Rüzgar: ${data.wind.speed} m/s</small>
  `;

  main.innerHTML = "";
  main.appendChild(weather);
}

// Uyarı mesajı
function uyariMesaji(msg) {
  const notif = document.createElement("div");
  notif.classList.add("mesaj");
  notif.innerText = msg;
  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);

  main.innerHTML = "";
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value.trim();

  if (city) {
    lokasyonBilgisi(city);
    search.value = "";
  } else {
    uyariMesaji("Lütfen bir konum girin!");
  }
});
