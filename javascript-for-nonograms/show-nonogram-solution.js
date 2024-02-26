function displaySolution(brightnessValues) {
    var canvas = document.getElementById('solutionCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);
    if (canvas.style.display === "block"){
        canvas.style.display = 'none';
    } 

    const cols = brightnessValues.length;
    const rows = brightnessValues.length;
    const squareSize = 300/cols; // Adjust the size of the squares as needed

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if(brightnessValues[i][j] === 0){
                var facecolor = "beige"
            } else{
                var facecolor = "black"
            }
            ctx.fillStyle = facecolor;
            ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
        }
    }

    }

function displayCanvas(){
    var canvas = document.getElementById('solutionCanvas');

    if (canvas.style.display === "none"){
        canvas.style.display = 'block';
    } else{
        canvas.style.display = "none";
    }
}

document.getElementById('showNonogramSolution').addEventListener('click', displayCanvas);
