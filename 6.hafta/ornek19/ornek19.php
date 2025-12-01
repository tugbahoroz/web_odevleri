<?php
$sayilar = [1, 2, 3, 4, 5];
// array_map örneğini anonim fonksiyon ile yapalım
$kareler = array_map(function($n) {
    return $n * $n;
}, $sayilar);
print_r($kareler);
echo "<hr>";
// Değişkene atama
$carpma = function(int $a, int $b): int {
return $a * $b;
};
echo $carpma(5, 6); 
?>