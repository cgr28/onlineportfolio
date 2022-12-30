from flask import Flask, send_from_directory, request
from flask_cors import CORS

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(
    app,
    origin=[
        "http://localhost:8080/",
        "https://colbe.herokuapp.com/",
        "http://colbe.herokuapp.com/",
        "http://colbe.me",
        "https://colbe.me"
        "http://localhost:3000/",
    ],
)

@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")


@app.errorhandler(404)
def page_not_found(e):
    """When there's a 404 error, return to the main page."""
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=False)