<?php 
$email = test_input ($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){  //Filter_validate_email ile
    $emailErr = "Invalid email format";                          // email kontrolü yapılır
}
?>