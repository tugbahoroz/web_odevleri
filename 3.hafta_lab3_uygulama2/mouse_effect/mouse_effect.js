const C_dot = document.querySelector("[data-cursor-dot]");
const C_border = document.querySelector("[data-cursor-border]");

let mouseX = 0, mouseY = 0;
let borderX = 0, borderY = 0;

const lerp = (a, b, n) => (1 - n) * a + n * b;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // küçük nokta anında takip etsin
  C_dot.style.left = `${mouseX}px`;
  C_dot.style.top = `${mouseY}px`;
});

function animate() {
  // 0.15 değeri gecikme miktarı (0..1 arası, küçülürse daha yumuşak)
  borderX = lerp(borderX, mouseX, 0.05);
  borderY = lerp(borderY, mouseY, 0.05);

  C_border.style.left = `${borderX}px`;
  C_border.style.top = `${borderY}px`;

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
