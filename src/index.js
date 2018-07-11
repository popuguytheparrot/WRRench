import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import App from '../app/App';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
