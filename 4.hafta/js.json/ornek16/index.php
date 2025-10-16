<?php
// Tek bir nesne yerine bir dizi nesne oluşturalım
$users = [];

// İlk kullanıcı
$user1 = new stdClass();
$user1->name = "Alice";
$user1->age = 25;
$user1->city = "London";
$user1->hobbies = ["Reading", "Traveling", "Coding"];
$users[] = $user1;

// İkinci kullanıcı
$user2 = new stdClass();
$user2->name = "Bob";
$user2->age = 30;
$user2->city = "New York";
$user2->hobbies = ["Music", "Sports", "Photography"];
$users[] = $user2;

// Üçüncü kullanıcı
$user3 = new stdClass();
$user3->name = "Charlie";
$user3->age = 28;
$user3->city = "Paris";
$user3->hobbies = ["Cooking", "Art", "Cycling"];
$users[] = $user3;

// Diziyi JSON'a çevir
$usersJSON = json_encode($users, JSON_PRETTY_PRINT);

// JSON'u ekrana yazdır
echo $usersJSON;
?>
