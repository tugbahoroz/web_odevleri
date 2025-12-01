<?php
echo "Merhaba Dünya!"; //echo -> ekrana mesaj yazdırmayı sağlar

// Değişkenler $ işareti ile başlar ve veri türünü belirtmenize gerek yok
$mesaj = "PHP öğreniyorum."; 
$yil = 2025; 
$pi_sayisi = 3.14; 
$ogrenci_mi = true; 

// '.' (nokta) operatörü metinleri ve değişkenleri birleştirmek için kullanılır.

echo $mesaj;
echo PHP_EOL;
echo "Bu yıl " . $yil . " yılıdır.";
echo PHP_EOL;
echo "Pi sayısı yaklaşık olarak $pi_sayisi değerindedir.";

//PHP_EOL -> ALT SATIRA İNMEYİ SAĞLAR (konsolda)(eğer tarayıcıda açacaksak html etiketleri kullanmamız gerek)
//php kodunun konsolda çalışması için de xampp de htdocs klasörünün içine atmamız gerek kodumuzu
?>

