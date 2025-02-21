# FLASK APP - Run the app using flask --app app.py run
import os, sys
from flask import Flask, request, render_template, jsonify
from pypdf import PdfReader 
from flask_cors import CORS
from getReview import get_review_for_report 


sys.path.insert(0, os.path.abspath(os.getcwd()))

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)

CORS(app) 

@app.route('/')
def index():
    return render_template('indexx.html')

@app.route("/process", methods=["POST"])
def ats():
    print("INside request")
    print(request.files)
    if "pdf" not in request.files:
        return jsonify({"message": "No file part"}), 400
    file = request.files["pdf"]
    if file.filename == "":
        return jsonify({"message": "No selected file"}), 400

    file.save(os.path.join(UPLOAD_FOLDER, file.filename)) 
 
    doc_path = os.path.join(UPLOAD_FOLDER, file.filename)
    data = _read_file_from_path(doc_path)
    data = get_review_for_report(data)
    print(data)
    return jsonify({"message": data})

 
def _read_file_from_path(path):
    reader = PdfReader(path) 
    data = ""

    for page_no in range(len(reader.pages)):
        page = reader.pages[page_no] 
        data += page.extract_text()

    return data 


if __name__ == "__main__":
    app.run(port=8000, debug=True)
