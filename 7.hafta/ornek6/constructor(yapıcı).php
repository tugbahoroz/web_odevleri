<?php 
class Song {
    function __construct($song){  //yapıcı
        echo "Song $song is created \n";
    }
}

$song = new Song ("Bad romance");
?>