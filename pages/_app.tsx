import {AppProps} from 'next/app';
import {useRouter} from 'next/dist/client/router';
import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import {UserProvider} from '@auth0/nextjs-auth0';

import * as gtag from '../lib/gtag';

import * as gtag from '../lib/gtag';

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

const MyApp = ({Component, pageProps, err}: AppProps & {err: any}) => {
	const router = useRouter();
	const {user} = pageProps;

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
		<UserProvider user={user}>
			<Component {...pageProps} err={err} />
			<GlobalStyle />
		</UserProvider>
	);
};

export default MyApp;
