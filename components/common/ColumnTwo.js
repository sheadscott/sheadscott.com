import React from 'react';
import styled from 'styled-components';

const ColumnTwo = props => <Container>{props.children}</Container>;

export { ColumnTwo };

const Container = styled.div`
  flex: 4;

  span {
    align-self: flex-end;
  }
`;
