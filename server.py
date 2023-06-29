!pip install flask

from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/process-input', methods=['POST'])
def process_input():
    input_text = request.json['input']
    # Call the backend function with the input_text and get the response
    response = subprocess.run(['python', 'chatbot_backend.py', input_text], capture_output=True, text=True)
    return jsonify({'response': response.stdout})

if __name__ == '__main__':
    app.run()