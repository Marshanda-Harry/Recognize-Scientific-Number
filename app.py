from flask import Flask, request, jsonify, render_template, send_from_directory
import os
import re

app = Flask(__name__)

# Pola regex untuk angka biasa dan angka dalam notasi ilmiah
scientific_notation_regex = re.compile(r'^-?\d+(\.\d+)?(e[-+]?\d+)?$', re.IGNORECASE)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    # Gunakan get_json dengan force=True untuk menangani request kosong
    data = request.get_json(force=True, silent=True)
    print("Received data:", data)  # Debugging

    # Jika request kosong atau tidak ada 'input', kembalikan error
    if not data or 'input' not in data:
        return jsonify({"message": "Invalid request"}), 400

    input_string = data['input']

    # Gunakan regex global yang sudah dideklarasikan
    if scientific_notation_regex.fullmatch(input_string):
        return jsonify({"message": "Yes, it is a number"})
    else:
        return jsonify({"message": "No, it is not a number"})
    
@app.route('/static/<path:filename>')
def static_files(background):
    return send_from_directory('static', background.jpg)

if __name__ == '__main__':
    app.run(debug=True)

