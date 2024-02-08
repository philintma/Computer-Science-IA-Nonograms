<!-- <?php
session_start();
?> -->
<!-- main menu -->
  <!-- <iframe src="Main-menu.html" frameborder="0" width="100%" height="100%"></iframe> I really want to split this code in several parts but for now I don't understand how to do it-->
  <div id="main-menu">
    <h1>Main Menu</h1>

  <div class="left-container">
    <img src="Website_logo.jpeg" alt="Website Logo" class="logo"> 
    <button class="bigbutton" id="showJapaneseCultureMain-menu">Fun facts about Japanese culture</button>
    <div id="japaneseCultureMain-menu" class="japanese-culture">
    <p id="factTextMain-menu"></p>
   </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- this line is used to include the jquery library -->
    <script src = "Japanese facts.js"></script>
    <script>
    $(document).ready(function() {
        handleButtonClick("showJapaneseCultureMain-menu", "factTextMain-menu");
    });
    </script>

  </div>

  <div class="center-container">
    <button class="bigbutton" id="goToNonogramSolving">Solve New Nonogram</button>
  </div>

  <div class="right-container">
  <button class="bigbutton" id="goToProfileFromMain-menu" style="display: none; visibility: invisible">Go to Personal Profile</button>
  <button class="bigbutton" id="goToProfileCreationFromMain-menu" style="display: block; visibility: visible">Create Personal Profile Or Log In</button>
  <!-- <?php
  if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
      echo '<button class="bigbutton" id="goToProfileFromMain-menu" style="display: block">Go to Personal Profile</button>';
      echo '<button class="bigbutton" id="goToProfileCreationFromMain-menu" style="display: none">Create Personal Profile</button>';
  } else {
    echo '<button class="bigbutton" id="goToProfileFromMain-menu" style="display: none">Go to Personal Profile</button>';
    echo '<button class="bigbutton" id="goToProfileCreationFromMain-menu" style="display: block">Create Personal Profile</button>';
  }
  ?> -->
  </div>
    
 </div>