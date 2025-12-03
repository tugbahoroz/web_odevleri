<?php 
session_start();
?>

<html>
    <body>
        <?php 
        $_SESSION["favvolor"] = "green";
        $_session["favanimal"] = "cat";
        echo "Session degiskenleri atandi";
        ?>
    </body>
</html>