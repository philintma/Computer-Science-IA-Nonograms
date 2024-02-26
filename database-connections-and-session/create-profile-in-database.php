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

// error_log("\n\nPHP: Request received \n", 3, "P_to_d_error.log");

// Get the JSON string from the request
$json_str = file_get_contents('php://input');

// Decode the JSON string into a PHP associative array
$data = json_decode($json_str, true);

// Check if the username and password are present in the decoded data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['username']) && isset($data['password'])) {
  $username = $data['username'];
  $password = $data['password'];

  error_log("PHP: Received username: " . $username, 3, "P_to_d_error.log");
  error_log("PHP: Received password: " . $password, 3, "P_to_d_error.log");

  $checkStmt = $connection->prepare("SELECT username FROM users WHERE username = ?");
  $checkStmt->bind_param('s', $username);
  $checkStmt->execute();
  $checkStmt->store_result();

  if ($checkStmt->num_rows > 0) {
    echo "PHP: Username taken";
    error_log("Username already taken", 3, "P_to_d_error.log");
  } else {
    // Username is not taken, proceed with the INSERT operation
    $insertStmt = $connection->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $insertStmt->bind_param('ss', $username, $password);
    
    if ($insertStmt->execute()) {
      echo "PHP: Profile saved successfully!";
    } else {
      echo "PHP: Error saving profile";
      error_log("PHP: Error executing SQL query", 3, "P_to_d_error.log");
    }
  }
}