<?php 
$mylife = fopen("newfile.txt", "w") or die("Dosya aöılmadı!");
$txt = "John Doe\n";
fwrite($mylife, $txt);
$txt = "Jane Doe\n";
fwrite($mylife, $txt);
fclose($mylife);

//fwrite = dosyaya yazma -> iki parametreden oluşur ilki: yazılacak dosyayı,
                                                //  ikincisi: yazılacak metni temsil eder
?>