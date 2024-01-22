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
    <canvas class="drawingcanvas"> </canvas>
  </div>
    
  <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromNonogram-solving">Go to Main Menu</button>
    <button class="bigbutton" id="goToProfileFromNonogram-solving">Go to Personal Profile</button>
  </div>
  </div>