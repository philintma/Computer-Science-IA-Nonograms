<!DOCTYPE html>
<html>
<head>
  <title>Nonograms website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  

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
    <button class="bigbutton" id="goToProfileFromMain-menu">Go to Personal Profile</button>
  </div>
    
 </div>

 <!-- profile -->
  <div id="profile" style="display: none;">
    <h1>Personal Profile</h1>
    <div class="left-container">
      <img src="Website_logo.jpeg" alt="Pacific Logo" class="logo">
    </div>
    <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromProfile">Go to Main Menu</button>
    </div>
  </div>


  <!-- nonogram solving -->
  <div id="nonogram-solving" style="display: none;">
    <h1>Solve Nonogram</h1>
    <div class="left-container">
      <img src="Website_logo.jpeg" alt="Pacific Logo" class="logo">
      <button class="bigbutton" id="showJapaneseCultureNonogram-solving">Fun facts about Japanese culture</button>
      <div id="japaneseCultureNonogram-solving" class="japanese-culture">
      <p id="factTextNonogram-solving"></p>
      </div>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <!-- this line is used to include the jquery library -->
      <script src = "Japanese facts.js"></script>
      <script>
      $(document).ready(function() {
          handleButtonClick("showJapaneseCultureNonogram-solving", "factTextNonogram-solving");
      });
      </script>
    </div>

    <div class="center-container">
    <form id="inputForm">
      <label for="numberInput1">Please input nonogram dimensions (numbers between 2 and 50) here:</label>
      <input type="number" id="numberInput1" min="2" max="50">
      <span> * </span>
      <input type="number" id="numberInput2" min="2" max="50">
      <button class="smallbutton" type="button" onclick="validateAndSaveDimensions()">Save</button>
    </form>
  </div>
    
  <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromNonogram-solving">Go to Main Menu</button>
    <button class="bigbutton" id="goToProfileFromNonogram-solving">Go to Personal Profile</button>
  </div>
  </div>


</body>

<script src="Website creation.js" defer></script>
<script src="Save nonogram dimensions.js" defer></script>

</html>
