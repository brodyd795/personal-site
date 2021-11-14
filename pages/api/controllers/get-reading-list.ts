import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {getReadingList} from '../services/get-reading-list';
import {reading_list} from '../../../prisma/generated/prisma-client-js';

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

		// @ts-ignore
		res
			.status(error.status || 500)
			.end(error.message || 'An unexpected error occurred');
	}
};

export default withSentry(handler);
