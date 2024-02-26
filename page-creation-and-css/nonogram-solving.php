<!-- nonogram solving -->
<div id="nonogram-solving" style="display: none;">
    <div class="left-container">
      <div class = "main-menu-and-logo">
      <img src="../images/website-logo.jpeg" alt="Logo" class="logo">
      <h1>Solve Nonogram</h1>
      </div>
      <div class = "buttons-and-solution">
      <div class = "buttoncol">
      <button class="bigbutton" id="showJapaneseCultureNonogram-solving">Fun facts about Japanese culture</button>
      <button class="bigbutton" id="goToMainMenuFromNonogram-solving">Go to Main Menu</button>
      <button class="bigbutton" id="goToProfileFromNonogram-solving" style="display: none">Go to Personal Profile</button>
      <button class="bigbutton" id="showNonogramSolution">Show Nonogram Solution</button>
      </div>
      <div class="canvas-wrapper">
      <canvas id="solutionCanvas" style="display: none;" width="300" height="300"></canvas>
      </div>
      </div>
    </div>

    
    <div class="right-container">

        <form id="inputForm">
          <label for="numberInput1">Please input nonogram dimension (a number between 2 and 50) here:</label>
          <input type="number" id="numberInput1" min="2" max="50">
          <button class="smallbutton" type="button" onclick="validateAndSaveDimensions()">Save</button>
        </form>
        <div class="image-row">
        <img src = "../images/red-cross.png" alt = "Cross" class = "button_image" onclick="changeMode('modeCross')">
        <img src = "../images/blue-dot.png" alt = "Dot" class = "button_image" onclick="changeMode('modeDot')">
        <img src = "../images/black-square.png" alt = "Square" class = "button_image" onclick="changeMode('modeSquare')">
        </div>
        <div id="textFieldsContainerVert"></div>
        <div id="canvasAndHorizContainer">
        <div id="textFieldsContainerHor"></div>
        <canvas class="drawingcanvas" width = "500" height = "500"> </canvas>
        </div>
        <div id="japaneseCultureNonogram-solving" class="japanese-culture">
        <h2 id="factTextNonogram-solving"></h2>
        </div>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src = "../javascript-for-button-work/japanese-facts-buttons.js"></script>
        <script>
        $(document).ready(function() {
            handleButtonClick("showJapaneseCultureNonogram-solving", "factTextNonogram-solving");
        });
        </script>
    </div>

</div>

<script>
        function changeMode(inp_mode) { //change between inputting crosses, dots or squares 
            mode = inp_mode;
            // console.log("Current mode: " + mode);
        }
  </script>
