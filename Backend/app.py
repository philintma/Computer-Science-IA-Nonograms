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

        if not dimension:
            print("dimension not received")
            return jsonify({'error': 'Dimension is required'}), 400
        # print("dimension received", dimension)
        
        brightness_str = subprocess.run(['python', 'D:/Xampp/htdocs/Internal_assesment/Backend/Image_processing.py', str(dimension)], check=True, stdout=subprocess.PIPE)
        brightness_counts = brightness_str.stdout.decode('utf-8').strip()
        # print("brightness_counts received", brightness_counts)

        result = subprocess.run(['python', 'D:/Xampp/htdocs/Internal_assesment/Backend/Nonogram_creation.py', brightness_counts], check=True, stdout=subprocess.PIPE) #stdout inclusion and result = was a later addition
        black_counts = result.stdout.decode('utf-8').strip()
        # print("black_counts received", black_counts)

        return jsonify({'black_counts': black_counts}) if black_counts else jsonify({"message": "No black counts found"})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)  # Run the Flask app on port 5000
