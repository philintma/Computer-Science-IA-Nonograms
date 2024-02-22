<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "nonograms";

$connection = new mysqli($server, $user, $pass, $db);
if ($connection->connect_error) {
    die("Connection error occured". $connection->connect_error);
} else{
    // echo "connected succesfully";
}

$sql = "SELECT Image_link FROM images ORDER BY RAND() LIMIT 1";
$result = $connection->query($sql);

// Check if the query was successful
if ($result->num_rows > 0) {
    // Output data of the random row
    $row = $result->fetch_assoc();
    echo $row["Image_link"];
} else {
    echo "No image links found";
}

$connection->close();
