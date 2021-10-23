import {AppProps} from 'next/app';
import {useRouter} from 'next/dist/client/router';
import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import '../styles/globals.css';

import * as gtag from '../lib/gtag';

const GlobalStyle = createGlobalStyle`
  body {
    color: #1d1e22;
    margin: 0;
    font-family: Helvetica, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const MyApp = ({Component, pageProps, err}: AppProps & {err: any}) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageView(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Component {...pageProps} err={err} />
			<GlobalStyle />
		</>
	);
};

export default MyApp;
