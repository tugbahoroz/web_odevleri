<?php 
abstract class Being{
    protected $isAlive = true;

    public function isAlive(){
        if ($this -> isAlive){
            echo "Being is alive \n";
        }
        else{
            echo "Being is not alive \n";
        }
    }

    public function kill(){
        $this -> isAlive = false;
    }
}

abstract class Animal extends Being {
    protected $age;

    public function __construct($age){
        $this -> age = $age;
    }

    protected function setAge ($age){
        $this -> age = $age;
    }
}
?>