import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

import {GA_TRACKING_ID} from '../lib/gtag';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<meta name='description' content="Brody Dingel's personal website" />
					<meta name='robots' content='follow, index' />
					<link href='favicons/favicon.ico' rel='shortcut icon' />
					<link href='favicons/site.webmanifest' rel='manifest' />
					<link
						href='favicons/apple-touch-icon.png'
						rel='apple-touch-icon'
						sizes='180x180'
					/>
					<link
						href='favicons/favicon-32x32.png'
						rel='icon'
						sizes='32x32'
						type='image/png'
					/>
					<link
						href='favicons/favicon-16x16.png'
						rel='icon'
						sizes='16x16'
						type='image/png'
					/>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${GA_TRACKING_ID}', {
								page_path: window.location.pathname,
								});
							`
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
