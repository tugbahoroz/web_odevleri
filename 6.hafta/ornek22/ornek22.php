<?php
// session_start() her zaman sayfanın EN BAŞINDA olmalıdır!
session_start();
// 1. Session Değişkeni Atama (Örn: Kullanıcı giriş yaptı)
$_SESSION["kullanici_adi"] = "Ahmet123";
$_SESSION["giris_zamani"] = time();
echo "Session atandı. Kullanıcı adı: " . $_SESSION["kullanici_adi"] . "<br>";

// 2. Session Kontrolü (Başka bir sayfada olduğunuzu varsayın)
if (isset($_SESSION["kullanici_adi"])) {
    echo "Tekrar hoş geldin, " . $_SESSION["kullanici_adi"] . "!<br>";
} 
else {
    echo "Giriş yapmamışsınız.<br>";
}
// 3. Session Silme (Çıkış yapma)
// session_unset(); // Tüm session değişkenlerini siler
// session_destroy(); // Oturumu tamamen sonlandırır
// Sadece tek bir değişkeni silmek için:
unset($_SESSION["giris_zamani"]);
echo "Giriş zamanı session'dan silindi.";
?>