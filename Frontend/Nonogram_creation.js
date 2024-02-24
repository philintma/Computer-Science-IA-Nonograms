function createNonogramValues(lightAndBlack) {
    const blackCountsRows = [];
    for (let i = 0; i < lightAndBlack.length; i++) {
        blackCountsRows.push([0]);
        for (let j = 0; j < lightAndBlack.length; j++) {
            if (lightAndBlack[i][j] === 1) {
                if (blackCountsRows[blackCountsRows.length - 1][0] === 0 || (j !== 0 && lightAndBlack[i][j - 1] === 1)) {
                    blackCountsRows[blackCountsRows.length - 1][blackCountsRows[blackCountsRows.length - 1].length - 1] += 1;
                } else {
                    blackCountsRows[blackCountsRows.length - 1].push(1);
                }
            }
        }
    }

    const blackCountsCols = [];
    for (let j = 0; j < lightAndBlack.length; j++) { //had "lightAndBlack[0].length here, but that gives error, and as far as I understand I have a square so I can just take same length twice"
        blackCountsCols.push([0]);
        for (let i = 0; i < lightAndBlack.length; i++) {
            if (lightAndBlack[i][j] === 1) {
                if (blackCountsCols[blackCountsCols.length - 1][0] === 0 || (i !== 0 && lightAndBlack[i - 1][j] === 1)) {
                    blackCountsCols[blackCountsCols.length - 1][blackCountsCols[blackCountsCols.length - 1].length - 1] += 1;
                } else {
                    blackCountsCols[blackCountsCols.length - 1].push(1);
                }
            }
        }
    }

    return [blackCountsCols, blackCountsRows];
}




// // The drawing function cannot be directly translated to JavaScript as it uses matplotlib, a Python-specific library.
// // Instead, you can use a JavaScript library like 'canvas' or 'node-canvas' to draw images.
// // Below is a placeholder for the drawing function, which you would need to implement using a JavaScript library.

// function drawSolvedNonogram(lightAndBlack) {
//     // Placeholder: Implement drawing using a JavaScript library like 'canvas' or 'node-canvas'
//     console.log('Drawing function needs to be implemented using a JavaScript graphics library.');
// }

// // Since Node.js does not have a native function to encode images to base64, you would need to use a library or write a custom function.
// // Below is a placeholder for the encoding function.

// function encodeImageToBase64(imageData) {
//     // Placeholder: Implement base64 encoding using a JavaScript library or custom function
//     console.log('Base64 encoding function needs to be implemented.');
// }

// // The drawing and encoding functions are placeholders and need to be implemented.
// const encodedImageData = drawSolvedNonogram(lightAndBlack);
// console.log(encodedImageData);