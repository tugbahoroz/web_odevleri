const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const brushShape = document.getElementById("brush-shape");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");
const saveBtn = document.getElementById("save");

const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;
let shape = "circle";

let undoStack = [];
let redoStack = [];

// Başlangıçta boş tuvali kaydet
saveState();

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  saveState(); // çizim bitince state kaydet
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircleOrSquare(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircleOrSquare(x, y) {
  ctx.beginPath();
  ctx.fillStyle = color;
  if (shape === "circle") {
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape === "square") {
    ctx.fillRect(x - size/2, y - size/2, size, size);
  }
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Fırça boyutu
increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;
  updateSize();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;
  updateSize();
});

function updateSize() {
  sizeEl.innerText = size;
}

// Renk seçimi
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

// Fırça şekli
brushShape.addEventListener("change", (e) => {
  shape = e.target.value;
});

// Temizle
clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  saveState();
});

// Kaydetme
saveBtn.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "my-drawing.png";
  link.click();
});

// Undo / Redo
undoBtn.addEventListener("click", () => {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop());
    let imgData = undoStack[undoStack.length -1];
    let image = new Image();
    image.src = imgData;
    image.onload = () => ctx.drawImage(image, 0, 0);
  }
});

redoBtn.addEventListener("click", () => {
  if (redoStack.length > 0) {
    let imgData = redoStack.pop();
    let image = new Image();
    image.src = imgData;
    image.onload = () => ctx.drawImage(image, 0, 0);
    undoStack.push(imgData);
  }
});

// Helper: canvas durumunu kaydet
function saveState() {
  undoStack.push(canvas.toDataURL());
  redoStack = [];
}
