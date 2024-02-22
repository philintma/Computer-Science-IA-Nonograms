from typing import List, Tuple
import matplotlib.pyplot as plt
import sys
import ast
import io
import base64

if len(sys.argv) < 2:
    print(sys.argv, 'Light_and_black argument is missing. Please provide light_and_black.')
    sys.exit(1)

light_and_black_str = sys.argv[1]
light_and_black = ast.literal_eval(light_and_black_str)

#This is the code from creating a nonogram based on an array of 0s and 1s

# light_and_black = [[0, 1, 1, 0, 0], 
#                    [0, 0, 1, 0, 1], 
#                    [0, 0, 0, 1, 1], 
#                    [0, 1, 1, 0, 0], 
#                    [1, 1, 1, 1, 0]]

def create_nonogram_values(light_and_black: List) -> Tuple[List, List]:
        black_counts_rows = [] 

        for i in range(len(light_and_black)):
            black_counts_rows.append([0]) #this subarray will store the values for the current row
            for j in range(len(light_and_black[i])):
                if light_and_black[i][j] == 1: #if it's a black cell and we need to count it
                    if black_counts_rows[-1] == [0] or (j != 0 and light_and_black[i][j-1] == 1): #first condition: avoid unneeded 0s (get [1, 2] instead of [0, 1, 2]). Second condition: check that we are still in the same set of consecutive 1s
                        black_counts_rows[-1][-1] += 1 
                    else:
                        black_counts_rows[-1].append(1) #a new set of 1s after some 0s

        # print("black_counts_rows", black_counts_rows)
        black_counts_cols = []

        for j in range(len(light_and_black[0])): #the same code but for columns
            black_counts_cols.append([0])
            for i in range(len(light_and_black)):
                if light_and_black[i][j] == 1:
                    if black_counts_cols[-1] == [0] or (i != 0 and light_and_black[i-1][j] == 1):
                        black_counts_cols[-1][-1] += 1 
                    else:
                        black_counts_cols[-1].append(1)
                
        # print("black_counts_cols", black_counts_cols)
        return [black_counts_cols, black_counts_rows]  #swapped because order was wrong for some reason
        
black_counts = create_nonogram_values(light_and_black=light_and_black)
print(black_counts)

##### This is a visualisation of the library with Matplotlib. I will probably not use it in the final product, I just need it to help me while working

def draw_solved_nonogram(light_and_black):

    fig, ax = plt.subplots()
    cols = len(light_and_black[0])
    rows = len(light_and_black)
    for i in range(cols): 
        for j in range(rows):
            if light_and_black[i][j] == 0:
                facecolor1 = "white"
            else:
                facecolor1 = "black"
            ax.add_patch(plt.Rectangle((j, cols-1-i), 1, 1, facecolor=facecolor1, edgecolor = 'black'))
    ax.set_xlim(0, rows)
    ax.set_ylim(0, cols)
    ax.set_aspect('equal')

    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    
    # Convert the image to a base64 encoded string
    encoded_image = base64.b64encode(buf.read()).decode('utf-8')
    
    plt.close()  # Close the plot to prevent it from being displayed
    
    return encoded_image

    
# Draw the nonogram
draw_solved_nonogram(light_and_black=light_and_black)

#to visualize an unsolved nonogram I have to mess with numbers positioning around the nonogram, so I won't do it for now
encoded_image_data = draw_solved_nonogram(light_and_black=light_and_black)
print(encoded_image_data)