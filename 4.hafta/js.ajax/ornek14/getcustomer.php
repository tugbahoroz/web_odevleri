<?php
// Veritabanı bağlantısı
$mysqli = new mysqli("localhost", "root", "", "ajax_example");

// Bağlantı kontrolü
if ($mysqli->connect_error) {
  exit('Veritabanına bağlanılamadı: ' . $mysqli->connect_error);
}

// SQL sorgusu (hazırlanmış ifade ile güvenli)
$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
        FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();

// Sorgu sonucunu değişkenlere bağlama
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();

if ($stmt->num_rows > 0) {
  echo "<table>";
  echo "<tr><th>Customer ID</th><td>$cid</td></tr>";
  echo "<tr><th>Company Name</th><td>$cname</td></tr>";
  echo "<tr><th>Contact Name</th><td>$name</td></tr>";
  echo "<tr><th>Address</th><td>$adr</td></tr>";
  echo "<tr><th>City</th><td>$city</td></tr>";
  echo "<tr><th>Postal Code</th><td>$pcode</td></tr>";
  echo "<tr><th>Country</th><td>$country</td></tr>";
  echo "</table>";
} else {
  echo "No customer found with that ID.";
}

$stmt->close();
$mysqli->close();
?>
