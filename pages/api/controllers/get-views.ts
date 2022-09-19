import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';
import {blog} from '@prisma/client';
import {getViews} from '../services/get-views';

export interface GetViewCountResponse {
	views: blog[];
}

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<GetViewCountResponse>
) => {
	try {
		const slug = req.query.slug as string;

		const views = await getViews({slug});
		console.log('views :>> ', views);

		res.status(200).send({views});
	} catch (error) {
		captureException(error);
		await flush(2000);

		// todo: check out https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
		res
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			.status(error.status || 500)
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			.end(error.message || 'An unexpected error occurred');
	}
};

export default withSentry(handler);
