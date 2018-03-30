import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import styled from 'styled-components';

import Example from 'components/Example';

const App = ({ className }) => (
  <div className={className}>
    <CssBaseline />
    <Example />
  </div>
);

export default styled(App)`
  font-family: Roboto, sans-serif;
`;
