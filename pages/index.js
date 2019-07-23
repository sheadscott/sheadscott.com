import React, { Component } from 'react';
import Axios from 'axios';
import Basics from '../components/Basics';
import Education from '../components/Education';
import Work from '../components/Work';
import Summary from '../components/Summary';
import Skills from '../components/Skills';

const JSONtheme = 'eighties';

export default class Home extends Component {
  state = {};

  static async getInitialProps() {
    const api =
      process.env.ENV === 'dev' ? 'http://127.0.0.1:8888' : 'https://sheadscott.com';

    const apiData = {};

    try {
      const basicsApi = await Axios.get(`${api}/api/resume/basics/`);
      apiData.basics = basicsApi.data;
      const summaryApi = await Axios.get(`${api}/api/resume/summary/`);
      apiData.summary = summaryApi.data;
      const educationApi = await Axios.get(`${api}/api/resume/education/`);
      apiData.education = educationApi.data;
      const workApi = await Axios.get(`${api}/api/resume/work/`);
      apiData.work = workApi.data;
      const skillsApi = await Axios.get(`${api}/api/resume/skills/`);
      apiData.skills = skillsApi.data;
      return { apiData };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { api, basics, summary, education, work, skills } = this.props.apiData;
    return (
      <React.Fragment>
        <Basics data={basics} api={api} theme={JSONtheme} />
        <Summary data={summary} api={api} theme={JSONtheme} />
        <Work data={work} api={api} theme={JSONtheme} />
        <Education data={education} api={api} theme={JSONtheme} />
        <Skills data={skills} api={api} theme={JSONtheme} />
      </React.Fragment>
    );
  }
}
