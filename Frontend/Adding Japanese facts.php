<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nonograms";

$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection error occured". $connection->connect_error);
} else{
    // echo "connected succesfully";
}


function getRandomJapaneseFact($connection) {
    $result = mysqli_query($connection, "SELECT Text FROM `japanese-facts`");

    if (!$result) {
        // echo "Error: " . mysqli_error($connection);
        return "Error fetching Japanese fact";
    } else {
        // Fetch all rows into an array
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        // Get a random index within the range of the array
        $randomIndex = array_rand($rows);

        // Select the row at the random index and retrieve the "Text" value
        $textValue = $rows[$randomIndex]['Text'];
        return $textValue;
    }
}

echo getRandomJapaneseFact($connection);

