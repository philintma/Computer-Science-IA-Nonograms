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
      <label for="numberInput1">Please input nonogram square side (a number between 2 and 50) here:</label>
      <input type="number" id="numberInput1" min="2" max="50">
      <button class="smallbutton" type="button" onclick="validateAndSaveDimensions()">Save</button>
    </form>
    <div class="image-row">
    <img src = "red_cross.png" alt = "Cross" class = "button_image" onclick="changeMode('modeCross')">
    <img src = "blue_dot.png" alt = "Dot" class = "button_image" onclick="changeMode('modeDot')">
    <img src = "black_square.png" alt = "Square" class = "button_image" onclick="changeMode('modeSquare')">
    </div>
    <div id="textFieldsContainerVert"></div>
    <div id="canvasAndHorizContainer">
    <div id="textFieldsContainerHor"></div>
    <canvas class="drawingcanvas" width = "500" height = "500"> </canvas>
    </div>
  </div>
    
  <div class="right-container">
    <button class="bigbutton" id="goToMainMenuFromNonogram-solving">Go to Main Menu</button>
    <button class="bigbutton" id="goToProfileFromNonogram-solving" style="display: none">Go to Personal Profile</button>
    <button class="bigbutton" id="showNonogramSolution">Show Nonogram Solution</button>
    <canvas id="solutionCanvas" style="display: none;" width="400" height="400"></canvas>
    <!-- <div id="solutionContainer"></div> -->
  </div>
  </div>

  <script>
        function changeMode(inp_mode) { //change between inputting crosses, dots or squares 
            mode = inp_mode;
            // console.log("Current mode: " + mode);
        }
  </script>