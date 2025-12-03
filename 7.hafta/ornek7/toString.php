<?php 
class Cat {
    public $name;
    public $age;

    function __contruct($name, $age){
        $this -> age = $age;
        $this -> name = $name;
    }

    function __toString(){
        return "Cat: $this -> name, Age: $this -> age \n";
    }
}

$missy = new Cat ("Missy", 6);
$lucky = new Cat ("Lucky", 4);

print $missy;
echo $lucky;

?>