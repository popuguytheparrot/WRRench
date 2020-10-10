import React from 'react';
import WebpackIcon from 'src/public/webpack-icon.svg';
import ReactIcon from 'src/public/react.svg';
import { Logo, ExampleHeader, ExampleContent } from './styled';

export const Example = () => (
  <>
    <ExampleHeader>
      <h1>
        <Logo aria-label="logo" role="img">
          🔧
        </Logo>
        WRRench
      </h1>
    </ExampleHeader>
    <ExampleContent key="ExampleContent">
      <figure>
        <img src={WebpackIcon} alt="webpack" />
        <figcaption>Webpack</figcaption>
      </figure>
      <figure>
        <img src={ReactIcon} alt="webpack" />
        <figcaption>React</figcaption>
      </figure>
    </ExampleContent>
  </>
);
