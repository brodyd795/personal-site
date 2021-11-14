import {prismaClient} from './prisma-client';

import {scrapePageTitle} from './scrape-service';

export const addToReadingList = async (url: string) => {
	const title = await scrapePageTitle(url);
	console.log('title :>> ', title);

	const prisma = prismaClient();

	// await prisma.reading_list.create({
	// 	data: {
	// 		url,
	// 		date_added: new Date()
	// 	}
	// });

	await prisma.$disconnect();
};
