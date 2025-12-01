<?php 

//CLASS YAPISI :
class Araba {
    public $marka;   //Her yerden erişilebilir.
    public $renk;   //Başka bir class’tan, hatta gerekirse proje dışından bile erişilebilir.
                    //Kullanılması güvenlik açısından risklidir (kontrolsüz erişim olabilir).
    private $hiz = 0; //private : sadece sınıf içinden erişilebilir


    //KURUCU METOD (CONSTRUCTOR) :
    public function __construct($marka, $renk){
        $this -> marka = $marka;
        $this -> renk = $renk;
        echo "$this -> marka ($this->renk) nesnesi oluşturuldu.<br>";
    }

    //METODLAR (METHODS / FONKSİYONLAR)
    public function hizlan($artis){
        $this -> hiz += $artis;
        echo "$this -> marka hızlandı. Yeni hız: $this -> hiz km/s <br>";
    }

    public function yavasla($azalis){
        $this -> hiz -= $azalis;
        if ($this -> hiz < 0){
            $this ->hiz = 0;
        }
        echo "$this -> marka yavaşladı. Yeni hız: $this -> hiz km/s <br>";
    }
    public function mevcutHiz(){
        return $this -> hiz;
    }
}

//Şimdi bu sınıftan , nesneler (object) oluşturacağız :

$araba1 = new Araba ("BMW", "Siyah" );
$araba2 = new Araba ("Mercedes", "Beyaz" );

echo "<hr>";

//Nesnelerin Metodlarını kullanacağız :

$araba1 -> hizlan(50);
$araba1 -> hizlan(20);
$araba1 -> yavasla(30);

echo "<hr>";

$araba2 -> hizlan(80);

echo "<hr>";
echo "BMW'nin son hızı: ". $araba1 -> mevcutHiz() . "km/s <br>"; 
echo "Mercedes'in son hızı: ". $araba2 -> mevcutHiz() . "km/s <br>"; 

//hız private old için dışarıdan erişilemez 
//bu nedenle : echo $araba1 -> hiz; bu satır HATA veerir!!!
?>