// on input from a python file I get an array of the type: [[all horizontal arrays of nums], [all vertical arrays of nums]] (all = squareNumber)
// for example, [[[1], [1], [1], [1], [3], [3], [3, 4], [9], [7], [4]], [[2], [3], [4], [3], [3], [4], [3], [5], [8], [2]]]
function createTextFields(dimension) {
    var containerVert = document.getElementById('textFieldsContainerVert');
    containerVert.innerHTML = '';

    for (var i = 0; i < dimension; i++) {
        var smallerContainer = document.createElement('div');
        for (var j = 0; j < dimension; j++) {
            var textBlock = document.createElement('div');
            textBlock.textContent = '123';
            smallerContainer.appendChild(textBlock);
        }
        containerVert.appendChild(smallerContainer);
    }

    var containerHor = document.getElementById('textFieldsContainerHor');
    containerHor.innerHTML = '';

    for (var i = 0; i < dimension; i++) {
        var smallerContainer = document.createElement('div');
        smallerContainer.classList.add('smallHorContainer');
        for (var j = 0; j < dimension; j++) {
            var textBlock = document.createElement('div');
            textBlock.classList.add('horTextBlock');
            textBlock.textContent = '123';
            smallerContainer.appendChild(textBlock);
        }
        containerHor.appendChild(smallerContainer);
    }

    var containerHorWidth = containerHor.offsetWidth;
    containerVert.style.marginLeft = containerHorWidth + 'px';
    console.log("updated margin-left: ", containerVert.style.marginLeft);
}