<?php 
class Person {  //sınıf
    public $name = "";
}

$p1 = new Person();  //nesne1
$p1 -> name = "Değer 1";  //nesnenin içindeki değişkene değer atama 

$p2 = new Person ();  //nesne 2
$p2 -> name = "Değer 2";

echo $p1 -> name . "\n";  //burada da değeri alırız
echo $p2 -> name . "\n";

//sınıf içindeki public değerlere ulaşabilmek için -> karakterlerini kullanırız
?>
