<?php 
//Basit, Parametre Almayan Fonksiyon

function selamVer(){
    echo "Merhaba! <br>";
}

//Fonksiyon Çağırma
selamVer();

//Parametre Alan Fonksiyon
function selamIsimle($isim){
    echo "Merhaba, $isim! <br>";
}

selamIsimle("Havva");
selamIsimle("Mehmet");

//Değer Döndüren (return) Fonksiyon
function topla($sayi1, $sayi2){
    $sonuc=$sayi1+$sayi2;
    return $sonuc;
}

$toplam = topla(10,15);
echo "10+15 = $toplam";
?>