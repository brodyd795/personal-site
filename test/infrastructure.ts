import {setupServer} from 'msw/node';
import {rest} from 'msw';

import {domains} from '../enums/domains';
import { GetReadingListResponse } from '../pages/api/controllers/get-reading-list';

const contactUrl = `http://${domains.LOCALHOST}/api/controllers/contact`;
const readingListUrl = `http://${domains.LOCALHOST}/api/controllers/get-reading-list`;

const readingListMockData: GetReadingListResponse = ({
	list: [
		{
			id: 1,
			date_added: new Date('2021-01-01'),
			url: 'https://example.com'
		}
	]
})

const contactHandler = rest.post(contactUrl, (req, res, ctx) =>
	res(ctx.status(200))
);
const contactHandlerOnFailure = rest.post(contactUrl, (req, res, ctx) =>
	res(ctx.status(500))
);
const readingListHandler = rest.get(readingListUrl, (req, res, ctx) =>
	res(ctx.json(readingListMockData))
);
const readingListErrorHandler = rest.get(readingListUrl, (req, res, ctx) =>
	res(ctx.status(500))
);
const readingListLoadingHandler = rest.get(readingListUrl, (req, res, ctx) =>
	res(ctx.delay(), ctx.json(readingListMockData))
);

const server = setupServer(contactHandler, contactHandlerOnFailure, readingListHandler, readingListErrorHandler, readingListLoadingHandler);

export {server, contactHandlerOnFailure, readingListErrorHandler, readingListLoadingHandler};
