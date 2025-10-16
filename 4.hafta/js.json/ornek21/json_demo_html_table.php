<?php
// Tarayıcıya JSON döneceğimizi belirtelim
header("Content-Type: application/json; charset=UTF-8");

// JSON formatındaki POST verisini al
$input = json_decode(file_get_contents("php://input"), true);

$table = $input["table"] ?? "";
$limit = $input["limit"] ?? 10;

$data = [];

if ($table === "customers") {
    $data = [
        ["id" => 1, "name" => "Ahmet Yılmaz", "city" => "İstanbul", "email" => "ahmet@example.com"],
        ["id" => 2, "name" => "Ayşe Demir", "city" => "Ankara", "email" => "ayse@example.com"],
        ["id" => 3, "name" => "Mehmet Can", "city" => "İzmir", "email" => "mehmet@example.com"]
    ];
} elseif ($table === "products") {
    $data = [
        ["id" => 1, "product" => "Dizüstü Bilgisayar", "price" => 25000, "stock" => 12],
        ["id" => 2, "product" => "Kulaklık", "price" => 900, "stock" => 45],
        ["id" => 3, "product" => "Monitör", "price" => 6000, "stock" => 20]
    ];
} elseif ($table === "suppliers") {
    $data = [
        ["id" => 1, "company" => "TechPro Ltd.", "country" => "Türkiye", "phone" => "+90 212 555 00 11"],
        ["id" => 2, "company" => "GlobalTrade", "country" => "Almanya", "phone" => "+49 301 234 567"],
        ["id" => 3, "company" => "FastSupply Co.", "country" => "ABD", "phone" => "+1 212 456 7890"]
    ];
} else {
    echo json_encode(["error" => "Geçersiz tablo seçimi"]);
    exit;
}

$data = array_slice($data, 0, $limit);

echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>
