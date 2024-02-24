// import Jimp from 'jimp';
// import axios from 'axios';

async function downloadImage(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        if (response.status === 200) {
            const image = await Jimp.read(Buffer.from(response.data));
            return image;
        } else {
            return ('Failed to download image', response.status);
        }
    } catch (error) {
        return ('Failed to download image', error);
    }
}

async function createBrightnessValues(dimension, imageLink) {
    const image = await downloadImage(imageLink);

    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const rectangleWidth = Math.floor(width / dimension);
    const rectangleHeight = Math.floor(height / dimension);
    image.grayscale();
    let brightnessValues = [];
    let sumValues = 0;

    for (let i = 0; i < dimension; i++) {
        brightnessValues.push([]);
        for (let j = 0; j < dimension; j++) {
            const left = j * rectangleWidth;
            const upper = i * rectangleHeight;
            const right = left + rectangleWidth;
            const lower = upper + rectangleHeight;

            const rectangle = image.clone().crop(left, upper, rectangleWidth, rectangleHeight);

            const pixelData = rectangle.bitmap.data;
            let brightnessValue = 0;
            for (let k = 0; k < pixelData.length; k += 4) {
                brightnessValue += (pixelData[k] + pixelData[k + 1] + pixelData[k + 2]) / 3;
            }
            brightnessValue /= (rectangleWidth * rectangleHeight);
            brightnessValues[i].push(brightnessValue);
            sumValues += brightnessValue;
        }
    }
    const averageBrightness = sumValues / (brightnessValues.length * brightnessValues[0].length);

    for (let row = 0; row < brightnessValues.length; row++) {
        for (let col = 0; col < brightnessValues[0].length; col++) {
            if (brightnessValues[row][col] >= averageBrightness) {
                brightnessValues[row][col] = 0;
            } else {
                brightnessValues[row][col] = 1;
            }
        }
    }
    // console.log(brightnessValues);
    return brightnessValues;
}


// module.exports = { createBrightnessValues };
