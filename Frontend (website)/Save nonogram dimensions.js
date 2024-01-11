function validateAndSaveDimensions() {
    var dimension1 = document.getElementById('numberInput1').value;
    var dimension2 = document.getElementById('numberInput2').value;
    if (dimension1 >= 2 && dimension1 <= 50 && dimension2 >= 2 && dimension2 <= 50) {
      // Save the input dimensions to be sent to Python later
      // You can store the values in variables or an array, depending on your requirements
      // For example:
      // var dimension1Value = dimension1;
      // var dimension2Value = dimension2;
      alert('Dimensions saved: ' + dimension1 + ' * ' + dimension2);
    } else {
      alert('Please enter numbers between 2 and 50 for both dimensions');
    }
  }