function tabloyuGetir() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const veriler = JSON.parse(this.responseText); // JSON verisini JavaScript nesnesine çevir
        let tablo = `
      <h2>Öğrenci Listesi</h2>
      <table border="1" cellpadding="8">
        <tr><th>Ad</th><th>Soyad</th><th>Not</th></tr>
    `;

        // Her öğrenciyi tabloya ekle
        veriler.forEach(ogr => {
            tablo += `<tr><td>${ogr.ad}</td><td>${ogr.soyad}</td><td>${ogr.not}</td></tr>`;
        });

        tablo += `</table>`;
        document.getElementById("demo").innerHTML = tablo;
    }
    xhttp.open("GET", "veriler.json");
    xhttp.send();
}
