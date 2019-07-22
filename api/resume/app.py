from os import environ
from flask import Flask, Response
from pathlib import Path
app = Flask(__name__)

@app.route('/api/resume/<path:path>/')
def catch_all(path):
    data = Path(f'/json/{path}.json').read_text()
    return Response(data, mimetype="application/json")


if environ.get('ENV') == 'dev':
    app.run(port=5000)
