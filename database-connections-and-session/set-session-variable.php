<?php
session_start();// not sure whether i need this line -- code works with it and also works without it
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // error_log("PHP: received post", 3, "session.log");
    // error_log($_POST['logged_in'], 3, "session.log");
  if (isset($_POST['logged_in']) && $_POST['logged_in'] === 'true') {
    $_SESSION['logged_in'] = true;
    // error_log("PHP: session set to logged in", 3, "session.log");
    // You can also send a response back to the JavaScript if needed
    echo 'Session variable set successfully';
  }
}

