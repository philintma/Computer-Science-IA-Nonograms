var mode = "modeSquare"; 

function getPixelColor(x, y, ctx) {
    // const ctx = canvas.getContext('2d');  
    const imageData = ctx.getImageData(x, y, 1, 1);
    const data = imageData.data;
    // console.log("imgdata", imageData);
    // Assuming the canvas is in black and beige, so the black squares have rgb 000 
    if (data[0] === 0 && data[1] === 0 && data[2] === 0) {
        return 'black';
    } else if (data[0] === 0 && data[1] === 0 && data[2] === 255) {
        return 'blue';
    }
    else if (data[0] === 255 && data[1] === 99 && data[2] === 71) {
        return 'tomato';
    }
     else if (data[0] === 245 && data[1] === 245 && data[2] === 220) {
        return 'beige';
    }
}

function create_squares(dimension1){ 
    var squarenumber = dimension1;

    const canvas = document.querySelector('.drawingcanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'beige';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Calculate the size of each square
    const squareSize = canvas.width / squarenumber;
    console.log(canvas.width, squareSize)
    // Draw the squares with borders
    ctx.strokeStyle = "black";
    for (let i = 0; i < squarenumber; i++){
    for (let j = 0; j < squarenumber; j++){
        ctx.strokeRect(squareSize*i, squareSize*j, squareSize, squareSize);
    } 
    }



    // Add click event listener to each square
    canvas.addEventListener('click', function(event) {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        if (mode == "modeSquare"){
            const color = getPixelColor(x, y, ctx); 
            // console.log("color", color);   
            if (color == "beige"){
                ctx.fillStyle = 'black';
            }
            else{
                ctx.fillStyle = 'beige';
            }
            ctx.fillRect(x - x%squareSize, y - y%squareSize, squareSize, squareSize);
            ctx.strokeStyle = "black";
            ctx.strokeRect(x - x%squareSize, y - y%squareSize, squareSize, squareSize);
        }
        else if (mode == "modeCross"){
            ctx.beginPath();
            ctx.moveTo(x - x%squareSize, y - y%squareSize);
            const color = getPixelColor(x - x%squareSize + squareSize/2, y - y%squareSize + squareSize/2, ctx); 
            if (color == "tomato"){
                ctx.strokeStyle = getPixelColor(x - x%squareSize + squareSize/4, y - y%squareSize + squareSize/2, ctx);
                ctx.lineWidth = 5;
            } else{
                ctx.strokeStyle = "tomato";
                ctx.lineWidth = 3;
            }
            ctx.lineTo(x - x%squareSize + squareSize, y - y%squareSize + squareSize);
            ctx.moveTo(x - x%squareSize, y - y%squareSize + squareSize);
            ctx.lineTo(x - x%squareSize + squareSize, y - y%squareSize);
            ctx.stroke();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeRect(x - x%squareSize, y - y%squareSize, squareSize, squareSize); //draw th square around once more to make sure that the cross doesn't lie over it
        }
        else if (mode == "modeDot"){
            ctx.beginPath();
            ctx.moveTo(x - x%squareSize + squareSize/2, y - y%squareSize + squareSize/2);
            const color = getPixelColor(x - x%squareSize + squareSize/2, y - y%squareSize + squareSize/2, ctx); 
            var radius = squareSize/10;
            // console.log("color before drawing dot", color);  
            if (color == "blue"){
                ctx.fillStyle = getPixelColor(x - x%squareSize + squareSize/4, y - y%squareSize + squareSize/2, ctx); //the background color of the square - to "eliminate" the dot. should I rather use clearrect for that?
                // console.log("new fillstyle", ctx.fillStyle);
                radius = squareSize/8; //to not leave a thin line og blue that can be seen
            }
            else{
                ctx.fillStyle = 'blue';
                
            }
            ctx.arc(x - x%squareSize + squareSize/2, y - y%squareSize + squareSize/2, radius, 0, 2 * Math.PI);
            ctx.fill();
        }

    });
}
