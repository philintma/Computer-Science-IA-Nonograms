<?php
session_start();
?>

<!-- profile -->
<div id="profile" style="display: none;">
    <h1>Personal Profile</h1>
    <?php
  // echo("session data ");
  if ($_SESSION['logged_in'] == false){
    echo('session logged in is false');}
  else{
    echo('session logged in is true');
  }?>
    <div class="left-container">
      <img src="Website_logo.jpeg" alt="Pacific Logo" class="logo">
    </div>
    <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromProfile">Go to Main Menu</button>
    </div>
  </div>