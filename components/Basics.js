import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ColumnOne, ColumnTwo, JSON } from './common';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const Basics = props => {
  const { api, theme } = props;
  const { basics } = props.data;
  return (
    <React.Fragment>
      <StyledHeader>
        <p className="name">{basics.name}</p>
        <p>
          <a href={`mailto:${basics.email}`}>{basics.email}</a>
        </p>
        <p>
          <a href={`tel:1-${basics.phone}`}>{basics.phone}</a>
        </p>
        <p>{basics.location.address}</p>
      </StyledHeader>
      <JSON>
        <ColumnOne>
          <a href={`${api}/api/resume/basics/`}>/api/resume/basics/</a>
        </ColumnOne>
        <ColumnTwo>
          <ReactJson src={basics} theme={theme} collapsed />
        </ColumnTwo>
      </JSON>
    </React.Fragment>
  );
};

export default Basics;

const StyledHeader = styled.header`
  font-family: ${props => props.theme.displayFont};
  align-items: baseline;
  /* border-bottom: 1px solid #333; */
  display: flex;
  justify-content: space-between;
  /* padding-top: 4rem; */
  padding-bottom: 1rem;
  /* margin-bottom: 2.4rem; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .name {
      margin-bottom: 1rem;
    }
  }

  p {
    &.name {
      font-size: 4rem;
    }
  }
  h1 {
    margin: 0;
    padding: 0;

    svg {
      width: 120px;
    }
  }
`;
