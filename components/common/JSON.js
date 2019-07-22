import React from 'react';
import styled from 'styled-components';

const JSON = props => <Container>{props.children}</Container>;

export { JSON };

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.6rem 0;
  transition: all 0.5s;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;

    div:first-child {
      margin-bottom: 1rem;
    }

    & > div {
      align-self: flex-start;
      width: 100%;
    }
  }

  @media print {
    display: none;
  }

  div.react-json-view {
    padding: 0.6rem;
    border-radius: 5px;

    div:first-child {
      margin-bottom: 0;
    }
  }
`;
