<?php 
interface Info {
    public function do_inform();
}

class Some implements Info {  //sınıfta interface kullanmak için implements kelimesini kullanırız.
    public function do_inform(){ //interface iiçndeki fonksiyonlar hiçbir işlem içermez!!!
        echo "This is a some class \n";
    }
}

$sm = new Some();
$sm -> do_inform();
?>