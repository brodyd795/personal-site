import React, {FC} from 'react';
import {createGlobalStyle} from 'styled-components';

interface IProps {
	Component: FC;
}

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

const MyApp = ({Component, pageProps, err}: IProps) => (
	<>
		<Component {...pageProps} err={err} />
		<GlobalStyle />
	</>
);

export default MyApp;
