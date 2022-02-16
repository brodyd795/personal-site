import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

import {GA_TRACKING_ID} from '../lib/gtag';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<link href='/favicon.ico' rel='icon' />
					<meta name='description' content="Brody Dingel's personal website" />
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
