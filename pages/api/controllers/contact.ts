import type {NextApiRequest, NextApiResponse} from 'next';
import {submitContactForm} from '../services/submit';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		submitContactForm(req.body.values);
		const data = {foo: 'bar'};

		res.json(data);
	} catch (error) {
		console.log(`error`, error);

		res.status(error.status || 500).end(error.message);
	}
};
