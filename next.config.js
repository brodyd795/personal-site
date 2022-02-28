const {withSentryConfig} = require('@sentry/nextjs');

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value:
			"default-src 'self' 'unsafe-eval' 'unsafe-inline' dingel.dev *.dingel.dev *.sentry.io *.googletagmanager.com *.google-analytics.com;"
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin'
	}
];

module.exports = withSentryConfig({
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders
			}
		];
	}
});
