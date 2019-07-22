import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ColumnOne, ColumnTwo, H2, JSON } from './common';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const Summary = props => {
  const { api, theme } = props;
  const { summary } = props.data;
  return (
    <React.Fragment>
      <H2>Summary</H2>
      <JSON>
        <ColumnOne>
          <a href={`${api}/api/resume/summary/`}>/api/resume/summary/</a>
        </ColumnOne>
        <ColumnTwo>
          <ReactJson src={summary} theme={theme} collapsed />
        </ColumnTwo>
      </JSON>
      <StyledSummary>
        <p>{summary.text}</p>
      </StyledSummary>
    </React.Fragment>
  );
};

export default Summary;

const StyledSummary = styled.div`
  p {
    padding-bottom: 1.6rem;
  }
`;
