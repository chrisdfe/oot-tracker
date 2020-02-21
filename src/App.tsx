import React from "react";

import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import HeartsPiecesPage from "./pages/HeartPieces/HeartPiecesPage";

const GlobalFontStyles = createGlobalStyle`
  * {
    font-family: 'Source Code Pro';
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalFontStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>OOT item tracker</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          // @ts-ignore
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HeartsPiecesPage />
    </div>
  );
}

export default App;
