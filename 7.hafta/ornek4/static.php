<?php 
class GFG {
    public static $num1 =7;

    public static function check($var){
        if (strlen($var) >= self::$num1)
            return true;
        else
            return false;
    }
}

$str = "GeeksforGeeks";

if(GFG::check($str))
    echo "String is valid";
else
    echo "String is NOT valid";
?>