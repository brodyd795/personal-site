import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from '@auth0/nextjs-auth0';

import {ADMIN_EMAILS} from '../../../enums/admin-emails';

interface IRequestBody {
	url: string;
	key: string;
}

export const getUrlIfIsAuthenticated = (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);
    const isAuthenticated = ADMIN_EMAILS.includes(session?.user.email);

    const {url, key: keySent}: IRequestBody = JSON.parse(req.body);
    const key = process.env.READING_LIST_EXTENSION_SECRET;
    const hasValidKey = key === keySent;

    if (!isAuthenticated && !hasValidKey) {
        throw new Error('Unauthorized.');
    }

    return url;
}