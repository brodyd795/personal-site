// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {Gtag} from 'gtag.js';

export const GA_TRACKING_ID = 'UA-189709819-2';

declare global {
	interface Window {
		gtag: Gtag;
	}
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string): void => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};
