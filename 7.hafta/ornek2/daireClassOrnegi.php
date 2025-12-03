<?php 
class Circle {
    public $radius;

    function setRadius ($radius){  //yarıçap değeri alan fonks
        $this -> radius = $radius;
    }

    function area(){ //alan hesaplayan fonks
        return $this -> radius * $this -> radius * M_PI;
    }
}

$c = new Circle();   //nesne üzerinde işlemler
$c -> setRadius(5);   //nesne üzerinde işlemler

echo $c->area(), "\n";   //nesne üzerinde işlemler

?>