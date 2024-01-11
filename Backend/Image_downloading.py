pic_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'

import requests
from io import BytesIO
from PIL import Image

def download_image(url):
    response = requests.get(url)
    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))
        image.save(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\downloaded_image_ex3.png", format=image.format)
        return 'Image downloaded successfully'
    else:
        return 'Failed to download image'

result = download_image(pic_url)
print(result)

#################### this is a code for automatically deleting an image (permanently). I might want to use it in the future, but I don't know yet, will depend on how the website works 
import os

file_path = '/path/to/the/image.jpg'

if os.path.exists(file_path):
    os.remove(file_path)
    print("File deleted successfully")
else:
    print("The file does not exist")
