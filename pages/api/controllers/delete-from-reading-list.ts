import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {getUrlIfIsAuthenticated} from '../services/auth-service';
import {deleteFromReadingList} from '../services/delete-from-reading-list';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const url = getUrlIfIsAuthenticated(req, res);

		await deleteFromReadingList(url);

		res.status(200).end();
	} catch (error) {
		captureException(error);
		await flush(2000);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		res.status(error.status || 500).end(error.message);
	}
};

export default withSentry(handler);
