<?php 
// Bu bölüm, sayfa POST metodu ile gönderildiğinde çalışır

$mesaj = ""; // Kullanıcıya gösterilecek mesaj için boş bir değişken

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Form gönderilmiş demektir.
// Bu, XSS (Cross-Site Scripting) saldırılarını önlemeye yardımcı olur.

    $ad = htmlspecialchars($_POST["kullanici_adi"]);//Güvenlik: htmlspecialchars()
    if (empty($ad)) {                      // kullanıcıdan gelen özel karakterleri HTML'e dönüştürür.
        $mesaj = "<p style='color: red;'>Lütfen adınızı giriniz.</p>";
    } 
    else {
        $mesaj = "<p style='color: green;'>Hoş geldin, $ad!</p>";
    }
}

?>