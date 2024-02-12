function validateAndSaveDimensions() {
    var dimension1 = document.getElementById('numberInput1').value;
    // var dimension2 = document.getElementById('numberInput2').value;
    if (dimension1 >= 2 && dimension1 <= 50) {
      alert('Dimensions saved: ' + dimension1 + ' * ' + dimension1);
      create_squares(dimension1)

    } else {
      alert('Please enter a number between 2 and 50');
    }
  }
