from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess


app = Flask(__name__)
CORS(app)

@app.route('/run_python_files', methods=['GET','POST'])
def run_python_files():
    try:
        data = request.get_json()
        dimension = data.get('dimension')
        image_link = data.get('image_link')
        if not dimension or not image_link:
            print("dimension or image_link not received")
            return jsonify({'error': 'Dimension and image_link are required'}), 400
        print("dimension and image_link received by app.py", dimension, image_link)
        scripts_dir = 'D:/Xampp/htdocs/Internal_assesment/Backend/'
        brightness_str = subprocess.run(['python', 'Image_processing.py', str(dimension), image_link], check=True, stdout=subprocess.PIPE, cwd=scripts_dir)
        brightness_counts = brightness_str.stdout.decode('utf-8').strip()
        print("brightness_counts received", brightness_counts)

        result = subprocess.run(['python', 'Nonogram_creation.py', brightness_counts], check=True, stdout=subprocess.PIPE, cwd=scripts_dir) #stdout inclusion and result = was a later addition
        output = result.stdout.decode('utf-8').strip()
        output_parts = output.split('\n')  # Split the output by newline, adjust based on your delimiter

        black_counts = output_parts[0]  # Get the first part as black_counts
        encoded_image_data = output_parts[1]  # Get the 
        # print("black_counts received", black_counts)
        # print("encoded_image_data received", encoded_image_data)

        return jsonify({'black_counts': black_counts, 'encoded_image_data': encoded_image_data}) if (black_counts and encoded_image_data) else jsonify({"message": "No black counts or encoded image data found"})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)  # Run the Flask app on port 5000
