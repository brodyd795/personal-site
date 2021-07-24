import type {NextApiRequest, NextApiResponse} from 'next';
import {submitContactForm} from '../services/submit';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await submitContactForm(req.body.values);

		res.status(200).end();
	} catch (error) {
		res.status(error.status || 500).end(error.message);
	}
};
