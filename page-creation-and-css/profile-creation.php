<!DOCTYPE html>
<html>
<head>
  <title>Nonograms website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<!-- Create profile or login. style display: none --> 
<div id="profile-creation" style="display: none;">
    <div class="left-container">
      <img src="../images/website-logo.jpeg" alt="Logo" class="logo">
      <h1>Create your personal profile or log in!</h1>
      <p> <b> A profile allows you to save nonograms that you haven't finished solving. </b> </p>
      <div class = "two-forms">
      <div class = "form">
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
      <div class="form" style="margin-left: 60px;">
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
    </div>
    </div>

    <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromProfile-creation">Go to Main Menu</button>
    </div>
  </div>

  </body>

</html>