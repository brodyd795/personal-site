import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';
import {reading_list} from '@prisma/client';

import {getReadingList} from '../services/get-reading-list';

export interface GetReadingListResponse {
	list: reading_list[];
}

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<GetReadingListResponse>
) => {
	try {
		const list = await getReadingList();

		res.status(200).send({list});
	} catch (error) {
		captureException(error);
		await flush(2000);

		// todo: check out https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
		res
			// @ts-ignore
			.status(error.status || 500)
			// @ts-ignore
			.end(error.message || 'An unexpected error occurred');
	}
};

export default withSentry(handler);
