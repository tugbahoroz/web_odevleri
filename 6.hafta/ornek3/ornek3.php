<?php 
//FOR DÖNGÜSÜ
echo "<h3>For Döngüsü (1-5 arası)</h3>";
echo "<ul>";
for ($i = 1; $i <=5; $i++){
    echo "<li>Sayi: $i </li>";
}
echo "</ul>";

//WHİLE DÖNGÜSÜ
echo "<h3>While Döngüsü</h3>";
$sayac = 1;
while ($sayac <= 3){
    echo "Sayaç Değeri: $sayac <br> ";
    $sayac++;
}
?>