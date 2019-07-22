import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ColumnOne, ColumnTwo, H2, JSON } from './common';
import Job from './Job';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const Work = props => {
  const { api, theme } = props;
  const { work } = props.data;
  // console.log('WORK: ', work);
  return (
    <React.Fragment>
      <H2>Experience</H2>
      <JSON>
        <ColumnOne>
          <a href={`${api}/api/resume/work/`}>/api/resume/work/</a>
        </ColumnOne>
        <ColumnTwo>
          <ReactJson src={work} theme={theme} collapsed />
        </ColumnTwo>
      </JSON>
      {work &&
        work.map((job, i) => {
          const noTitle = i > 0 && job.company === 'Austin Community College';
          return <Job key={i} job={job} noTitle={noTitle} />;
        })}
    </React.Fragment>
  );
};

export default Work;
