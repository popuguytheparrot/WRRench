import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import styled from 'styled-components';

import Example from '../components/Example';

const App = ({ className }) => (
  <CssBaseline>
    <div className={className}>
      <Example />
    </div>
  </CssBaseline>
);

export default styled(App)`
  font-family: Roboto, sans-serif; 
`;
