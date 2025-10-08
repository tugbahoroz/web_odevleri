// Güncel tarihten yeni yıla kalan süreyi hesaplar
function getTimeRemaining(targetDate) {
  const now = new Date();
  const total = (targetDate - now) / 1000; // saniye cinsinden
  return {
    days: Math.floor(total / 3600 / 24),
    hours: Math.floor((total / 3600) % 24),
    minutes: Math.floor((total / 60) % 60),
    seconds: Math.floor(total % 60),
    total: total
  };
}

// Animasyon ekle
function animate(span) {
  span.className = "flip";
  setTimeout(() => { span.className = ""; }, 700);
}

// Geri sayımı başlat
function startCountdown(id, targetDate) {
  const clock = document.getElementById(id);

  const interval = setInterval(() => {
    const t = getTimeRemaining(targetDate);

    clock.innerHTML = `
      <span>${t.days}</span>
      <span>${t.hours}</span>
      <span>${t.minutes}</span>
      <span>${t.seconds}</span>
    `;

    // animasyon
    const spans = clock.getElementsByTagName("span");
    animate(spans[3]); // saniye
    if (t.seconds === 59) animate(spans[2]); // dakika
    if (t.minutes === 59 && t.seconds === 59) animate(spans[1]); // saat
    if (t.hours === 23 && t.minutes === 59 && t.seconds === 59) animate(spans[0]); // gün

    if (t.total <= 0) {
      clearInterval(interval);
      clock.innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

window.onload = function() {
  const now = new Date();
  let nextYear = now.getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
  startCountdown("clock", newYearDate);
};
