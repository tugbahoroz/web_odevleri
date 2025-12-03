<?php      //bir dosyayı okuma modunda açma                //hata mesajı verir, program sonlanır
$mylife = fopen("webdictionary.txt","r") or die("Unable to open file!");
echo fread($mylife, filesize("webdictionary.txt")); //dosyadan okuma
fclose($mylife); //dosya kapatma
?>