import {domains} from '../enums/domains';
import {environments} from '../enums/vercel-environments';

export const redirectTo = (redirectToUrl: string): string => {
	if (redirectToUrl) {
		return `/api/auth/login?redirectTo=${encodeURIComponent(redirectToUrl)}`;
	}

	return `/api/auth/login`;
};

export const getBaseUrl = (): string => {
	const environment = process.env.VERCEL_ENV;

	// eslint-disable-next-line no-console
	console.log({
		environments,
		environment,
		domains,
		commitRef: process.env.VERCEL_GIT_COMMIT_REF,
		vercelUrl: process.env.VERCEL_URL
	});

	if (environment === environments.PRODUCTION) {
		return `https://${domains.PRODUCTION}`;
	}
	if (environment === environments.PREVIEW) {
		return process.env.VERCEL_GIT_COMMIT_REF === 'dev'
			? `https://${domains.DEV}`
			: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			  `https://${process.env.VERCEL_URL!}`;
	}

	return `http://${domains.LOCALHOST}`;
};

export const getRedirectUrl = (): string => `${getBaseUrl()}/api/auth/callback`;
