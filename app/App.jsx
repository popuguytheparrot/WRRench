import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Example } from 'components/Example';

const GlobalStyle = createGlobalStyle`
  body {
   padding: 0;
   margin: 0;
  }
`;

const App = ({ className }) => (
  <div className={className}>
    <GlobalStyle />
    <Example />
  </div>
);

export default styled(App)`
  font-family: Roboto, sans-serif;
`;
