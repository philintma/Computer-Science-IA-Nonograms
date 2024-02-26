  <div id="main-menu">

  <div class="left-container">
    <div class = "main-menu-and-logo">
    <img src="../images/website-logo.jpeg" alt="Website Logo" class="logo"> 
    <h1>Main menu</h1>
    </div>
    <button class="bigbutton" id="showJapaneseCultureMain-menu">Fun facts about Japanese culture</button>
    <button class="bigbutton" id="goToNonogramSolving">Solve New Nonogram</button>
    <button class="bigbutton" id="goToProfileFromMain-menu" style="display: none; visibility: invisible">Go to Personal Profile</button>
    <button class="bigbutton" id="goToProfileCreationFromMain-menu" style="display: block; visibility: visible">Create Personal Profile Or Log In</button>

  </div>

  <div class="right-container">
  <div id="japaneseCultureMain-menu" class="japanese-culture">
    <h2 id="factTextMain-menu"></h2>
  </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src = "../javascript-for-button-work/japanese-facts-buttons.js"></script>
    <script>
    $(document).ready(function() {
        handleButtonClick("showJapaneseCultureMain-menu", "factTextMain-menu");
    });
    </script>
  </div>
    
 </div>