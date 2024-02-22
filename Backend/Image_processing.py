from PIL import Image
import sys
import requests
from io import BytesIO

def download_image(url):
    response = requests.get(url)
    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))
        # image.save(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\downloaded_image_ex3.png", format=image.format)
        return image
    else:
        return ('Failed to download image', response.status_code) #Image.open(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\example for PIL - banana.jpg")

# print(image)


if len(sys.argv) < 3:
    print('Dimension argument or image_link is missing. Please provide the dimension or image_link.')
    sys.exit(1)

dimension_str = sys.argv[1]
dimension = int(dimension_str)
# dimension = 10
image_link = sys.argv[2]
image = download_image(image_link)

# image = Image.open(r"C:\Users\nimar\OneDrive\Документы\Internal Assesment CS\example for PIL - banana.jpg")


# Get the dimensions of the image
width, height = image.size

# Define the size of each rectangle
rectangle_width = width // dimension # 10 Assuming a 10x10 grid
rectangle_height = height // dimension

image = image.convert('L')

brightness_values = []
sum_values = 0 #for counting the average later
# Loop through each rectangle

for i in range(dimension):
    brightness_values.append([])
    for j in range(dimension):
    # Define the coordinates of the current rectangle
        left = j * rectangle_width  #I have to doublecheck that I haven't messed up with j and i #all seems right for now
        upper = i * rectangle_height
        right = left + rectangle_width
        lower = upper + rectangle_height

        # Crop the rectangle from the image
        rectangle = image.crop((left, upper, right, lower))

        # Analyze the darkness/lightness of the rectangle
        # You can use the getdata() method to access pixel values and perform analysis

        # Example: Calculate the average brightness of the rectangle
        pixel_data = list(rectangle.getdata())

        brightness_value = sum(pixel_data)/len(pixel_data) 
        # print("bv", brightness_value)
        brightness_values[-1].append(brightness_value)
        sum_values += brightness_value

average_brightness = sum_values / (len(brightness_values[0])*len(brightness_values))
# print("av", average_brightness)

for row in range(len(brightness_values)):
    for col in range(len(brightness_values[0])):
        if brightness_values[row][col] >= average_brightness:
            brightness_values[row][col] = 0
        elif brightness_values[row][col] < average_brightness:
            brightness_values[row][col] = 1

print(brightness_values)

    
