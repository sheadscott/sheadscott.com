import React, { Component } from 'react';
import styled from 'styled-components';
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
    const api = process.env.ENV === 'dev' ? 'http://127.0.0.1:5000' : '';

    try {
      const basicsApi = await Axios.get(`${api}/api/resume/basics/`);
      const basics = basicsApi.data;
      const summaryApi = await Axios.get(`${api}/api/resume/summary/`);
      const summary = summaryApi.data;
      const educationApi = await Axios.get(`${api}/api/resume/education/`);
      const education = educationApi.data;
      const workApi = await Axios.get(`${api}/api/resume/work/`);
      const work = workApi.data;
      const skillsApi = await Axios.get(`${api}/api/resume/skills/`);
      const skills = skillsApi.data;
      return { api, basics, summary, education, work, skills };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { api, basics, summary, education, work, skills } = this.props;
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
