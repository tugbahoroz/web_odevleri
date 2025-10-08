const yeniNotBtn = document.getElementById("yeniNot");
const notTut = JSON.parse(localStorage.getItem("notlar")) || [];

notTut.forEach((item) => {
  ekleYeniNot(item.text, item.date, item.color);
});

yeniNotBtn.addEventListener("click", () => {
  ekleYeniNot();
});

function ekleYeniNot(text = "", date = new Date(), color = "#dad2bc") {
  const not = document.createElement("div");
  not.classList.add("not");

  not.innerHTML = `<div class="notlar" style="background-color:${color}">
      <div class="araclar">
          <button class="ekle"><i class="fas fa-edit"></i></button>
          <input type="color" class="renkSecici" value="${color}" />
          <button class="sil"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="notSayfa ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
      <div class="not-tarih">${new Date(date).toLocaleString()}</div>
  </div>`;

  const ekleBtn = not.querySelector(".ekle");
  const silBtn = not.querySelector(".sil");
  const notSayfa = not.querySelector(".notSayfa");
  const textArea = not.querySelector("textarea");
  const renkSecici = not.querySelector(".renkSecici");

  textArea.value = text;
  notSayfa.innerHTML = marked(text);

  ekleBtn.addEventListener("click", () => {
    notSayfa.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  silBtn.addEventListener("click", () => {
    not.remove();
    guncelleLocalStorage();
  });

  textArea.addEventListener("input", (e) => {
    notSayfa.innerHTML = marked(e.target.value);
    guncelleLocalStorage();
  });

  renkSecici.addEventListener("change", (e) => {
    not.querySelector(".notlar").style.backgroundColor = e.target.value;
    guncelleLocalStorage();
  });

  document.body.prepend(not); // Yeni not en üste eklensin

  guncelleLocalStorage();
}

function guncelleLocalStorage() {
  const notlar = document.querySelectorAll(".not");
  const notArray = [];

  notlar.forEach((not) => {
    const text = not.querySelector("textarea").value;
    const date = not.querySelector(".not-tarih").innerText;
    const color = not.querySelector(".notlar").style.backgroundColor;
    notArray.push({ text, date, color });
  });

  localStorage.setItem("notlar", JSON.stringify(notArray));
}
