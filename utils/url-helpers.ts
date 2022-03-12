export const redirectTo = (redirectToUrl: string): string => {
	if (redirectToUrl) {
		return `/api/auth/login?redirectTo=${encodeURIComponent(redirectToUrl)}`;
	}

	return `/api/auth/login`;
};

export const getBaseUrl = (): string => {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}

	return '';
};

export const getRedirectUrl = (): string => `${getBaseUrl()}/api/auth/callback`;
