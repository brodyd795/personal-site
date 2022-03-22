import React from 'react';
import {NextPageContext} from 'next';
import NextErrorComponent, {ErrorProps} from 'next/error';

import * as Sentry from '@sentry/nextjs';

interface AppErrorProps extends ErrorProps {
	err: Error;
	hasGetInitialPropsRun: boolean;
}

const MyError = ({
	statusCode,
	hasGetInitialPropsRun,
	err
}: AppErrorProps): JSX.Element => {
	if (!hasGetInitialPropsRun && err) {
		Sentry.captureException(err);
	}

	return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async (ctx: NextPageContext) => {
	const errorInitialProps = (await NextErrorComponent.getInitialProps(
		ctx
	)) as AppErrorProps;

	errorInitialProps.hasGetInitialPropsRun = true;

	if (ctx.err) {
		Sentry.captureException(ctx.err);

		await Sentry.flush(2000);

		return errorInitialProps;
	}

	Sentry.captureException(
		new Error(
			`_error.js getInitialProps missing data at path: ${ctx.asPath ?? ''}`
		)
	);

	await Sentry.flush(2000);

	return errorInitialProps;
};

export default MyError;
