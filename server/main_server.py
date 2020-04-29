import os
from flask import Flask
import urllib.request
from flask import Flask, flash, request, redirect, render_template
from werkzeug.utils import secure_filename

app = Flask(__name__)

def allowed_file(filename):
	return True

@app.route('/testing')
def tester():
    print(request)
    return {"a": 3}


@app.route('/upload_file')
def upload_file():
    print(request)
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No file selected for uploading')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save("./", filename)
            flash('File successfully uploaded')
            return redirect('/')
        else:
            flash('Allowed file types are txt, pdf, png, jpg, jpeg, gif')
            return redirect(request.url)

    else:
        return "Need to preform post"
        

if __name__ == '__main__':
    app.run(debug = True)