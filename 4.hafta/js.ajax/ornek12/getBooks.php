<?php
$books = array(
    "Küçük Prens",
    "Simyacı",
    "1984",
    "Suç ve Ceza",
    "Sefiller",
    "Harry Potter",
    "Yüzüklerin Efendisi",
    "Savaş ve Barış",
    "Kürk Mantolu Madonna"
);

// Kullanıcının girdiği değeri al
$q = isset($_GET['q']) ? $_GET['q'] : "";

// Boşsa boş dön
if ($q === "") {
    echo "";
    exit;
}

// Önerileri filtrele
$hint = "";
foreach ($books as $book) {
    if (stripos($book, $q) !== false) { // Büyük/küçük harf duyarsızlığı
        if ($hint === "") {
            $hint = $book;
        } else {
            $hint .= ", " . $book;
        }
    }
}

echo $hint === "" ? "Hiçbir öneri yok" : $hint;
?>
