import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {submitContactForm} from '../services/submit';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {url, key: keySent} = JSON.parse(req.body);
		const key = process.env.READING_LIST_EXTENSION_SECRET;
		console.log({url, key});
		if (key === keySent) {
			console.log('submitted url with correct key', url, keySent, key);
		} else {
			console.log('bad key', key, keySent);
		}
		// await submitContactForm(req.body.values);

		res.status(200).end();
	} catch (error) {
		captureException(error);
		await flush(2000);

		res.status(error.status || 500).end(error.message);
	}
};

export default withSentry(handler);
