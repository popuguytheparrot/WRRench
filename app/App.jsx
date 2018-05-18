import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Example from 'components/Example';

injectGlobal`
  body {
   padding: 0;
   margin: 0;
  }
`;

const App = ({ className }) => (
  <div className={className}>
    <Example />
  </div>
);

export default styled(App)`
  font-family: Roboto, sans-serif;
`;
