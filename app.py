from flask import Flask, render_template, jsonify
import os
import random

app = Flask(__name__)

REAL_FACE_DIR = "data/real_faces"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/next-image")
def next_image():
    is_ai = random.choice([True, False])

    if is_ai:
        image_url = "https://thispersondoesnotexist.com/image"
    else:
        images = os.listdir(REAL_FACE_DIR)
        image = random.choice(images)
        image_url = f"/static/real/{image}"

    return jsonify({
        "image_url": image_url,
        "is_ai": is_ai
    })

if __name__ == "__main__":
    app.run(debug=True)
