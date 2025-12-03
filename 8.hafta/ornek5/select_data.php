<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, firstname, lastname FROM MyGuests"; //sql sorgusu
$result = $conn->query($sql);


if ($result->num_rows > 0) { //sonuç var mı kontrol edilir
    
    while($row = $result->fetch_assoc()) { // Her satırdaki veriye çıktı ver
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results"; // Sonuç yoksa bu döner
}

$conn->close();
?>