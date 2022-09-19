import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {updateViews} from '../services/update-views';

interface IRequestBody {
	url: string;
	key: string;
}

type Req = Omit<NextApiRequest, 'body'> & {body: string};

const handler = async (req: Req, res: NextApiResponse) => {
	try {
		const {slug} = JSON.parse(req.body);

		await updateViews(slug);

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
