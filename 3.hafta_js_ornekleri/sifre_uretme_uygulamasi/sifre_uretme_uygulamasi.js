const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const toggleEl = document.getElementById("toggle");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const rakamlar = "0123456789";
const semboller = "!@#$%^&*()_+=";

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function sifreUret() {
  const len = parseInt(lenEl.value);
  if (len < 8 || len > 20) {
    alert("Şifre uzunluğu 8 ile 20 arasında olmalıdır!");
    return;
  }

  if (!upperEl.checked && !lowerEl.checked && !numberEl.checked && !symbolEl.checked) {
    alert("Lütfen en az bir karakter tipi seçin!");
    return;
  }

  let sifre = "";

  const secilen = [];
  if (upperEl.checked) secilen.push("upper");
  if (lowerEl.checked) secilen.push("lower");
  if (numberEl.checked) secilen.push("number");
  if (symbolEl.checked) secilen.push("symbol");

  // En az bir karakter tipini ekle
  secilen.forEach(type => {
    if (type === "upper") sifre += getRandomChar(buyukHarfler);
    if (type === "lower") sifre += getRandomChar(kucukHarfler);
    if (type === "number") sifre += getRandomChar(rakamlar);
    if (type === "symbol") sifre += getRandomChar(semboller);
  });

  while (sifre.length < len) {
    const type = secilen[Math.floor(Math.random() * secilen.length)];
    if (type === "upper") sifre += getRandomChar(buyukHarfler);
    if (type === "lower") sifre += getRandomChar(kucukHarfler);
    if (type === "number") sifre += getRandomChar(rakamlar);
    if (type === "symbol") sifre += getRandomChar(semboller);
  }

  // Karakterleri karıştır
  sifre = sifre.split("").sort(() => Math.random() - 0.5).join("");

  pwEl.innerText = sifre;
}

generateEl.addEventListener("click", sifreUret);

copyEl.addEventListener("click", () => {
  const sifre = pwEl.innerText;
  if (!sifre) return;

  navigator.clipboard.writeText(sifre)
    .then(() => alert("Şifre Kopyalandı!"))
    .catch(() => alert("Kopyalama Başarısız!"));
});

toggleEl.addEventListener("click", () => {
  if (pwEl.style.userSelect === "none") {
    pwEl.style.userSelect = "text";
  } else {
    pwEl.style.userSelect = "none";
  }
});
