// on input from a python file I get an array of the type: [[all horizontal arrays of nums], [all vertical arrays of nums]] (all = squareNumber)
// for example, [[[1], [1], [1], [1], [3], [3], [3, 4], [9], [7], [4]], [[2], [3], [4], [3], [3], [4], [3], [5], [8], [2]]]

async function runPythonFiles(dimension) { //should add sending dimension to file
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/run_python_files', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dimension: dimension }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error:', data.error);
                reject(data.error);
            } else {
                const black_counts = data.black_counts;
                // console.log('black_counts:', black_counts);
                resolve(black_counts);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reject(error);
        });
    });
}


async function createTextFields(dimension) {
    console.log("sending dimension: ", dimension);
    const black_counts = await runPythonFiles(dimension);
    const black_counts_array = JSON.parse(black_counts);
    console.log('black_counts_arr:', black_counts_array);
    var containerVert = document.getElementById('textFieldsContainerVert');
    containerVert.innerHTML = '';

    for (var i = 0; i < dimension; i++) {
        var smallerContainer = document.createElement('div');
        for (var j = 0; j < dimension; j++) {
            var textBlock = document.createElement('div');
            textBlock.textContent = black_counts_array[0][i][j];
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
            textBlock.textContent = black_counts_array[1][i][j];
            smallerContainer.appendChild(textBlock);
        }
        containerHor.appendChild(smallerContainer);
    }

    var containerHorWidth = containerHor.offsetWidth;
    containerVert.style.marginLeft = containerHorWidth + 'px';
    console.log("updated margin-left: ", containerVert.style.marginLeft);
}