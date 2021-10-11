import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {addToReadingList} from '../services/add-to-reading-list';

interface IRequestBody {
	url: string;
	key: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {url, key: keySent}: IRequestBody = JSON.parse(req.body);
		const key = process.env.READING_LIST_EXTENSION_SECRET;

		if (key !== keySent) {
			throw new Error('Bad key');
		}

		await addToReadingList(url);

		res.status(200).end();
	} catch (error) {
		captureException(error);
		await flush(2000);

		res.status(error.status || 500).end(error.message);
	}
};

export default withSentry(handler);
