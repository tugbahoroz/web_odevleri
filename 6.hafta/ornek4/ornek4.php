<?php
// 1. İndexli Dizi -> İndexler 0 dan başlar
$meyveler = ["Çilek", "Erik", "Muz", "Şeftali"];

echo "İlk Meyve:" . $meyveler[2] . "<br>";
echo "İlk Meyve:" . $meyveler[3] . "<br>";

//Diziye Yeni Eleman Ekleme
$meyveler[] = "Karpuz";


// 2. İlişksel Dizi : key -> value çidtleri kullanılır
$lisi = [
    "Ad" => "Ahmet",
    "Soyad" => "Korkmaz",
    "Yas" => 32,
    "Meslek" => "Bilgisayar Mühendisi"
];

echo $kisi["Ad"] . " " . $kisi["Soyad"] . ", " . $kisi["Yas"] . "yaşıad bir" . $kisi["Meslek"] . "tir.";
echo "<hr>";


//FOREACH DÖNGÜSÜ -> DİZİLER ÜZTÜNDE GEZİNMEK İÇİN EN KOLAY YOLDUR
echo "<h3>Meyve Listesi (Foreach)</h3>";
echo "<ul>";
foreach ($meyveler as $meyve){
    echo "<li>$meyve</li>";
}
echo "</ul>";

//İlişkisel Dizide Gezinme
echo "<h3>Kişi Bilgileri (foreach)</h3>";
foreach ($kisi as $anahtar => $deger){
    echo "$anahtar : $deger <br>";
} 
?>