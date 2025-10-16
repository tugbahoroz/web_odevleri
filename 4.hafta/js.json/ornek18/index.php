<?php
// PHP dizisi
$myArr = array("Apple", "Banana", "Cherry", "Date", "Elderberry");

// Diziyi JSON'a çevir
$myJSON = json_encode($myArr, JSON_PRETTY_PRINT);

// JSON'u ekrana yazdır
echo $myJSON;
?>
