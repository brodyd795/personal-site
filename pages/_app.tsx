import {AppProps} from 'next/app';
import {useRouter} from 'next/dist/client/router';
import React, {useEffect} from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/globals.css';
import * as gtag from '../lib/gtag';

config.autoAddCss = false

const MyApp = ({Component, pageProps, err}: AppProps & {err: Error}): JSX.Element => {
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
		</>
	);
};

export default MyApp;
