<!-- <?php
session_start();
?> -->
<!DOCTYPE html>
<html>
<head>
  <title>Nonograms website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<!-- Create profile or login. style display: none --> 
<div id="profile-creation" style="display: none;">
    <h1>Create your personal profile or log in!</h1>
    <p> A profile allows you to save nonograms that you haven't finished solving. </p>
    <div class="left-container">
      <img src="Website_logo.jpeg" alt="Logo" class="logo">
      <p class="profileText">To create a profile please fill in:</p>
      <form id="createProfileForm" class="profileForm">
      <label for="username">Your username</label>
      <input type="text" id="usernameInput">
      <p></p>
      <label for="password">Your password</label>
      <input type="password" id="passwordInput">
      <p></p>
      <label for="repeatPassword">Please repeat your password</label>
      <input type="password" id="repeatPasswordInput">
      <p></p>
      <button class="smallbutton" type="button" onclick="validateAndSaveProfile()">Save</button>
      </form>
    </div>
    <div class="center-container">
    <p class="profileText">To log in please fill in:</p>
      <form id="logInForm" class="profileForm">
      <label for="username">Your username</label>
      <input type="text" id="logInUsernameInput">
      <p></p>
      <label for="password">Your password</label>
      <input type="password" id="logInPasswordInput">
      <p></p>
      <button class="smallbutton" type="button" onclick="logIntoProfile()">Log in</button>
      </form>
  </div>
    <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromProfile-creation">Go to Main Menu</button>
    </div>
  </div>

  </body>

<script src="Website creation.js" defer></script>
<script src="Profile_creation.js" defer></script>
<script src="Log_in.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>

</html>