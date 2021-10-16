import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {submitContactForm} from '../services/submit';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await submitContactForm(req.body.values);

		res.status(200).end();
	} catch (error) {
		captureException(error);
		await flush(2000);

		// @ts-ignore
		res.status(error.status || 500).end(error.message);
	}
};

export default withSentry(handler);
