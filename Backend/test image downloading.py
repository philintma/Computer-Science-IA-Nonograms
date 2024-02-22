from PIL import Image
import sys
import requests
from io import BytesIO
pic_url = 'https://i.pinimg.com/474x/a2/48/11/a24811ab33427c05bf6e2cfadd0e3a1e.jpg'
def download_image(url):
    response = requests.get(url)
    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))
        # image.save(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\downloaded_image_ex3.png", format=image.format)
        return image
    else:
        return ('Failed to download image', response.status_code) #Image.open(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\example for PIL - banana.jpg")

image = download_image(pic_url)
print(image)