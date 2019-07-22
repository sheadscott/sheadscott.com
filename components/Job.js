import React from 'react';
import styled from 'styled-components';
import { ColumnOne, ColumnTwo, H2 } from './common';

const Job = props => {
  const { job, noTitle } = props;
  return (
    <Wrapper className="job">
      <ColumnOne>
        {job.startDate} - {job.endDate}
      </ColumnOne>
      <ColumnTwo>
        {!noTitle && (
          <div className="company">
            <h3>{job.company}</h3>
            <span>{job.location}</span>
          </div>
        )}
        <p className="position">{job.position}</p>
        {job.highlights[0] && (
          <ul>
            {job.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}
      </ColumnTwo>
    </Wrapper>
  );
};

export default Job;

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > div:first-child {
      margin-bottom: 1rem;
    }

    & > div {
      align-self: flex-start;
    }
  }

  div.company {
    display: flex;
    justify-content: space-between;
  }

  .position {
    font-style: italic;
    padding: 0.6rem 0;
  }
`;
