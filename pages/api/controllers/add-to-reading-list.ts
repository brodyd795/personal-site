import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';
import {getSession} from '@auth0/nextjs-auth0';

import {ADMIN_EMAILS} from '../../../enums/admin-emails';
import {addToReadingList} from '../services/add-to-reading-list';

interface IRequestBody {
	url: string;
	key: string;
}

type Req = Omit<NextApiRequest, 'body'> & {body: string}

const handler = async (req: Req, res: NextApiResponse) => {
	try {
		const session = getSession(req, res);
		const isAuthenticated = ADMIN_EMAILS.includes(session?.user.email);

		const {url, key: keySent} = JSON.parse(req.body) as IRequestBody;
		const key = process.env.READING_LIST_EXTENSION_SECRET;
		const hasValidKey = key === keySent;

		if (!isAuthenticated && !hasValidKey) {
			throw new Error('Unauthorized.');
		}

		await addToReadingList(url);

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
