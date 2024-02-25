// on input from a python file I get an array of the type: [[all horizontal arrays of nums], [all vertical arrays of nums]] (all = squareNumber)
// for example, [[[1], [1], [1], [1], [3], [3], [3, 4], [9], [7], [4]], [[2], [3], [4], [3], [3], [4], [3], [5], [8], [2]]]

// const { createBV } = require('./functions');

async function getImageFromDatabase() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "Get_image_link_from_database.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText === "No image links found") {
                    reject("No image links have been found :(");
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    });
}


async function runBValues(dimension, image_link) { //should add sending dimension to file
    return new Promise((resolve, reject) => {
        try {
            const BrightnessValues = createBrightnessValues(dimension, image_link);
            resolve(BrightnessValues);
        } catch (error) {
            reject(error);
        }
    });
}

async function runNValues(BrightnessValues) { //should add sending dimension to file
    return new Promise((resolve, reject) => {
        try {
            const black_counts = createNonogramValues(BrightnessValues);
            resolve(black_counts);
        } catch (error) {
            reject(error);
        }
    });
}



async function createTextFields(dimension) {
    const image_link = await getImageFromDatabase();
    console.log("got image link", image_link);
    console.log("sending dimension: ", dimension);
    const brightnessValues = await runBValues(dimension, image_link);
    const black_counts = await runNValues(brightnessValues);
    displaySolution(brightnessValues);  
    console.log("got black_counts", black_counts);

    var containerVert = document.getElementById('textFieldsContainerVert');
    containerVert.innerHTML = '';

    for (var i = 0; i < dimension; i++) {
        var smallerContainer = document.createElement('div');
        for (var j = 0; j < dimension; j++) {
            var textBlock = document.createElement('div');
            textBlock.textContent = black_counts[0][i][j];
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
            textBlock.textContent = black_counts[1][i][j];
            smallerContainer.appendChild(textBlock);
        }
        containerHor.appendChild(smallerContainer);
    }

    var containerHorWidth = containerHor.offsetWidth;
    containerVert.style.marginLeft = containerHorWidth + 'px';
    // console.log("updated margin-left: ", containerVert.style.marginLeft);
}