import {getRedirectUrl, getBaseUrl} from '../utils/url-helpers';

if (typeof window === 'undefined') {
	module.exports = {
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
		AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
		AUTH0_SCOPE: process.env.AUTH0_SCOPE,
		POST_LOGOUT_REDIRECT_URI: getBaseUrl(),
		REDIRECT_URI: getRedirectUrl(),
		SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
		SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET
	};
} else {
	module.exports = {
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
		AUTH0_SCOPE: process.env.AUTH0_SCOPE,
		POST_LOGOUT_REDIRECT_URI: getBaseUrl(),
		REDIRECT_URI: getRedirectUrl()
	};
}
