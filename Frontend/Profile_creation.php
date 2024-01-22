<!-- This file isn't ready yet, it is only a start and I still have to write all the js functions and include it in the main file -->

<!DOCTYPE html>
<html>
<head>
  <title>Nonograms website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<!-- Create profile or login. style display: none --> 
<div id="profile-creation" style="display: block;">
    <h1>Let's create your personal profile!</h1>
    <p> Creating a profile will allow you to save nonograms that you haven't finished solving. </p>
    <div class="left-container">
      <img src="Website_logo.jpeg" alt="Logo" class="logo">
    </div>
    <div class="center-container">
    <form id="createProfileForm">
      <label for="username">Please input your username here:</label>
      <input type="text" id="usernameInput">
      <p></p>
      <label for="password">Please input your password here:</label>
      <input type="password" id="passwordInput">
      <button class="smallbutton" type="button" onclick="validateAndSaveProfile()">Save</button>
    </form>
  </div>
    <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromProfile-creation">Go to Main Menu</button>
    </div>
  </div>

  </body>

<script src="Website creation.js" defer></script>

</html>