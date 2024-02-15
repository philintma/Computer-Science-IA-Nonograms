function validateAndSaveDimensions() {
    var dimension1 = document.getElementById('numberInput1').value;
    // var dimension2 = document.getElementById('numberInput2').value;
    if (dimension1 >= 2 && dimension1 <= 50) {
      alert('Dimensions saved: ' + dimension1 + ' * ' + dimension1 + ". Please wait for a couple of seconds while your nonogram is created!");
      createTextFields(dimension1);
      // console.log("ran createtextfields");
      create_squares(dimension1);
      // console.log("ran createsquares");

    } else {
      alert('Please enter a number between 2 and 50');
    }
  }
