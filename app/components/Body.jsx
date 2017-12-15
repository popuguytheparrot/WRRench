import React from 'react';
import WebpackIcon from 'img/webpack-icon.svg'
import ReactIcon from 'img/react.svg'
import ReduxIcon from 'img/redux.svg'
import RouterIcon from 'img/react-router.svg'



const Body = props => (
  <section className="body">
    <section className="libs">
      <div className="webpack">
        <img src={WebpackIcon} alt="" />
        <p>Webpack</p>
      </div>
      <div className="react">
        <img src={ReactIcon} alt="" />
        <p>React</p>
      </div>
      <div className="redux">
        <img src={ReduxIcon} alt="" />
        <p>Redux</p>
      </div>
      <div className="router">
        <img src={RouterIcon} alt="" />
        <p>React-Router</p>
      </div>
    </section>
    <section>
      <div className="git-clone" />
    </section>
  </section>
);

export default Body;
