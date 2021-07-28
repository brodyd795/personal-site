import {AppProps} from 'next/app';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: grey;
    margin: 0;
    font-family: Helvetica, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const MyApp = ({Component, pageProps, err}: AppProps & {err: any}) => (
	<>
		<Component {...pageProps} err={err} />
		<GlobalStyle />
	</>
);

export default MyApp;
