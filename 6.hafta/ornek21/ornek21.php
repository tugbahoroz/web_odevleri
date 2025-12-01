<?php
$dosya_adi = "gunluk.txt";
$icerik = "Bugün " . date("d.m.Y H:i:s") . " tarihinde log kaydı tutuldu.\n";

// 1. Dosyaya Yazma (veya Oluşturma)
// file_put_contents: Dosya yoksa oluşturur, varsa üzerine yazar.
file_put_contents($dosya_adi, $icerik);

// 2. Dosyaya Ekleme (Append)
// Varolan içeriğin sonuna eklemek için FILE_APPEND bayrağı kullanılır.
$yeni_icerik = "İkinci log kaydı.\n";
file_put_contents($dosya_adi, $yeni_icerik, FILE_APPEND);

// 3. Dosyadan Okuma
if (file_exists($dosya_adi)) { // Dosya var mı?
    $okunan_veri = file_get_contents($dosya_adi);

    // nl2br() fonksiyonu: Satır sonlarını (\n) HTML <br> etiketine çevirir.
    echo "<h3>Günlük Dosyası İçeriği</h3>";
    echo nl2br($okunan_veri);
} 
else {
    echo "Dosya bulunamadı.";
}
?>