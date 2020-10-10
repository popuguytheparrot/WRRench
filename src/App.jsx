import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Example } from 'src/features/Example';

const GlobalStyle = createGlobalStyle`
  html {
   font-family: Roboto, sans-serif;
   height: 100vh;
  }
  
  body {
   padding: 0;
   margin: 0;
  }
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Example />
      </main>
    </>
  );
}
