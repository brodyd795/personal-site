import {setupServer} from 'msw/node';
import {rest} from 'msw';

import {domains} from '../enums/domains';

const contactUrl = `http://${domains.LOCALHOST}/api/controllers/contact`;

const contactHandler = rest.post(contactUrl, (req, res, ctx) =>
	res(ctx.status(200))
);
const contactHandlerOnFailure = rest.post(contactUrl, (req, res, ctx) =>
	res(ctx.status(500))
);

const server = setupServer(contactHandler, contactHandlerOnFailure);

export {server, contactHandlerOnFailure};
