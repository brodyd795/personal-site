import type {NextApiRequest, NextApiResponse} from 'next';
import {withSentry, captureException, flush} from '@sentry/nextjs';

import {submitContactForm} from '../services/submit';
import {FieldValues} from "../../../types/shared-types";

type Req = Omit<NextApiRequest, 'body'> & {body: {values: FieldValues}}

const handler = async (req: Req, res: NextApiResponse) => {
	try {
		await submitContactForm(req.body.values);

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
