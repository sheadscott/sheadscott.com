import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ColumnOne, ColumnTwo, H2, JSON } from './common';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const Education = props => {
  const { api, theme } = props;
  const { education } = props.data;
  console.log(education);
  return (
    <React.Fragment>
      <H2>Education</H2>
      <JSON>
        <ColumnOne>
          <a href={`${api}/api/resume/education/`}>/api/resume/education/</a>
        </ColumnOne>
        <ColumnTwo>
          <ReactJson src={education} theme={theme} collapsed />
        </ColumnTwo>
      </JSON>
      <Wrapper>
        <ColumnOne>
          {education.startDate} - {education.endDate}
        </ColumnOne>
        <ColumnTwo>
          <div className="institution">
            <h3>{education.institution}</h3>
            <span>{education.location}</span>
          </div>
          <p>
            {education.studyType} in {education.area}
          </p>
        </ColumnTwo>
      </Wrapper>
    </React.Fragment>
  );
};

export default Education;

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0;

  div.institution {
    display: flex;
    justify-content: space-between;
  }

  .position {
    font-style: italic;
  }
`;
