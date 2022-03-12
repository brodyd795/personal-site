export const redirectTo = (redirectToUrl: string): string => {
	if (redirectToUrl) {
		return `/api/auth/login?redirectTo=${encodeURIComponent(redirectToUrl)}`;
	}

	return `/api/auth/login`;
};

export const getBaseUrl = (): string =>
	typeof window !== 'undefined' ? window.location.origin : '';

export const getRedirectUrl = (): string => `${getBaseUrl()}/api/auth/callback`;
