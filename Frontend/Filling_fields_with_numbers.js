// on input from a python file I get an array of the type: [[all horizontal arrays of nums], [all vertical arrays of nums]] (all = squareNumber)
// for example, [[[1], [1], [1], [1], [3], [3], [3, 4], [9], [7], [4]], [[2], [3], [4], [3], [3], [4], [3], [5], [8], [2]]]

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


async function runPythonFiles(dimension, image_link) { //should add sending dimension to file
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/run_python_files', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dimension: dimension, image_link: image_link }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error:', data.error);
                reject(data.error);
            } else {
                const black_counts = data.black_counts;
                const encoded_image_data = data.encoded_image_data;

                if (black_counts && encoded_image_data) {
                    resolve({ black_counts, encoded_image_data });
                } else {
                    console.error('Error: No black counts or encoded image data found');
                    reject('No black counts or encoded image data found');
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reject(error);
        });
    });
}


async function createTextFields(dimension) {
    const image_link = await getImageFromDatabase();
    console.log("got image link", image_link);
    console.log("sending dimension: ", dimension);
    const output = await runPythonFiles(dimension, image_link);
    const black_counts = output.black_counts;
    const black_counts_array = JSON.parse(black_counts);
    const encoded_image_data = output.encoded_image_data;
    window.encoded_image_data = encoded_image_data;

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