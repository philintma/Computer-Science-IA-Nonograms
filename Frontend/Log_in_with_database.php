<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
// ini_set('error_log', "D:/Xampp/htdocs/Internal_assesment/Frontend/profile_error_log.txt");

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

error_log("\n\nPHP: Request received \n", 3, "Log_in.log");

// Get the JSON string from the request
$json_str = file_get_contents('php://input');

// Decode the JSON string into a PHP associative array
$data = json_decode($json_str, true);

// Check if the username and password are present in the decoded data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['username']) && isset($data['password'])) {
    $username = $data['username'];
    $password = $data['password'];

    error_log("PHP: Received username: " . $username, 3, "Log_in.log");
    error_log("PHP: Received password: " . $password, 3, "Log_in.log");

    $checkStmt = $connection->prepare("SELECT username, password FROM users WHERE username = ?");
    $checkStmt->bind_param('s', $username);
    $checkStmt->execute();
    $checkStmt->store_result();
    $checkStmt->bind_result($dbUsername, $dbPassword);
    $checkStmt->fetch();

    if ($checkStmt->num_rows > 0 && $password === $dbPassword) {
    echo "PHP: Username and password are valid";
    error_log("PHP: logged in", 3, "Log_in.log");
    } else if ($checkStmt->num_rows == 0){
    echo "PHP: Invalid username or password";
    error_log("PHP: username not found", 3, "Log_in.log");
    } else {
        echo "PHP: Invalid username or password";
        error_log("PHP: password not found", 3, "Log_in.log");
    }
}