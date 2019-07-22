import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ColumnOne, ColumnTwo, H2, JSON } from './common';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const Skills = props => {
  const { api, theme } = props;
  const { skills } = props.data;
  return (
    <React.Fragment>
      <H2>Skills</H2>
      <JSON>
        <ColumnOne>
          <a href={`${api}/api/resume/skills/`}>/api/resume/skills/</a>
        </ColumnOne>
        <ColumnTwo>
          <ReactJson src={skills} theme={theme} collapsed />
        </ColumnTwo>
      </JSON>
      <StyledSkills>
        {skills.map((skillgroup, i) => (
          <li key={i}>{skillgroup}</li>
        ))}
      </StyledSkills>
    </React.Fragment>
  );
};

export default Skills;

const StyledSkills = styled.div`
  p {
    padding-bottom: 1.6rem;
  }
`;
