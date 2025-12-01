<?php
$Syas = 25;

if($yas >= 18){
    echo "Ehliyet Alabilirsiniz :)" . PHP_EOL;
}
elseif($yas <= 18 && $yas >=16){
    echo "Ehliyet alamazsınız ama stajyer ehliyeti için başvurabilirsiniz" . PHP_EOL;
}
else{
    echo "Ehliyet alamazsınız!!!" . PHP_EOL ;
}

echo str_repeat('-', 30);
?>