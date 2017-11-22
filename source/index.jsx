import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';
import 'styles/style.scss';

const App = () => [
  <Header />,
  <Body />,
  <Footer />,
];

ReactDOM.render(<App />, document.getElementById('root'));
