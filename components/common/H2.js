import React from 'react';
import styled from 'styled-components';

const H2 = props => <Container>{props.children}</Container>;

export { H2 };

const Container = styled.h2`
  border-bottom: 1px solid #333;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 2.4rem;
`;
