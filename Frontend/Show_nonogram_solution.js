function displayBase64Image() {
    // var encoded_image_data = "YOUR_BASE64_ENCODED_IMAGE_DATA_HERE";
    const encoded_image_data = window.encoded_image_data;
    // console.log("got encoded_image_data")
    var imageContainer = document.getElementById('solutionContainer');
    if (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    } else {
    var img = document.createElement('img');
    img.src = "data:image/png;base64," + encoded_image_data;
    img.style.width = "400px";
    img.style.height = "auto";
    img.style.top = "260px";
    
    imageContainer.appendChild(img);
    // console.log("appended image")
    }
}

document.getElementById('showNonogramSolution').addEventListener('click', displayBase64Image);
