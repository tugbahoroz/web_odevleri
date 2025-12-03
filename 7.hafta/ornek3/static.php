<?php 
class Class_name {
    public static $var = "text";  //static değişken

    public static function func(){  //statik fonksiyon
        echo self::$var;
    }
}

Class_name::func();
?>