from os import environ
from flask import Flask, Response
from pathlib import Path
import requests

app = Flask(__name__)

@app.route('/api/resume/<path:path>/')
def catch_all(path):
    if environ.get('ENV') == 'dev':
        print(requests.get('http://api.tvmaze.com/search/shows?q=girls').json())
        data = Path(f'../json/{path}.json').read_text()

    else:
        data = requests.get(f'http://sheadscott.com/api/json/{path}.json').json()

    return Response(data, mimetype="application/json")


if environ.get('ENV') == 'dev':
    app.run(port=5000)
