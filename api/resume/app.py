from flask import Flask
from pathlib import Path
app = Flask(__name__)

@app.route('/api/resume/basics/')
def basics():
    basics_data = Path('json/basics.json').read_text()
    return basics_data 

@app.route('/api/resume/summary/')
def summary():
    summary_data = Path('json/summary.json').read_text()
    return summary_data 

@app.route('/api/resume/education/')
def education():
    education_data = Path('json/education.json').read_text()
    return education_data

@app.route('/api/resume/work/')
def work():
    work_data = Path('json/work.json').read_text()
    return work_data

@app.route('/api/resume/training/')
def training():
    training_data = Path('json/training.json').read_text()
    return training_data

@app.route('/api/resume/skills/')
def skills():
    skills_data = Path('json/skills.json').read_text()
    return skills_data

@app.route('/api/resume/projects/')
def projects():
    return """{

    }"""

@app.route('/api/resume/volunteer/')
def volunteer():
    return """{

    }"""

app.run(port=5000)



