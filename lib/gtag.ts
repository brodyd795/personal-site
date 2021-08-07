export const GA_TRACKING_ID = 'UA-189709819-2';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
	// @ts-ignore
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};
