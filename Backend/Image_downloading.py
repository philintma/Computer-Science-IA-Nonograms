pic_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'

import requests
import base64

def get_image_base64(url):
    response = requests.get(url)
    if response.status_code == 200:
        image_content = response.content
        base64_image = base64.b64encode(image_content).decode('utf-8')
        return base64_image
    else:
        return None

base64_image = get_image_base64(pic_url)
if base64_image:
    print(base64_image)
else:
    print('Failed to retrieve image as base 64 string')


#################### this is a code for automatically deleting an image (permanently). I might want to use it in the future, but I don't know yet, will depend on how the website works 
# import os

# file_path = '/path/to/the/image.jpg'

# if os.path.exists(file_path):
#     os.remove(file_path)
#     print("File deleted successfully")
# else:
#     print("The file does not exist")
