import React from 'react';
import styled from 'styled-components';

const ColumnOne = props => <Container>{props.children}</Container>;

export { ColumnOne };

const Container = styled.div`
  flex: 1;
  align-self: center;
  padding-right: 1.4rem;

  a {
    font-family: monospace;
    font-size: 1.4rem;
  }
`;
