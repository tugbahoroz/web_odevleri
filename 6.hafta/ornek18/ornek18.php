<?php
// Sadece int (tamsayı) kabul edip, sadece int döndüreceğini garanti eder.
function topla(int $a, int $b): int {
    return $a + $b;
}
echo topla(5, 10); // Çıktı: 15
// Hata verir (string gönderildiği için):
// echo topla(5, "10 elma"); // PHP 7+ 'strict_types=1' modunda bu satır ölümcül hata verir.
?>