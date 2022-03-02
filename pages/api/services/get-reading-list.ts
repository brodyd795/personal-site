import {reading_list} from '@prisma/client';

import {prisma} from './prisma-client';

export const getReadingList = async (): Promise<reading_list[]> => {
	const items = await prisma().reading_list.findMany({
		take: 4,
		orderBy: {
			date_added: 'desc'
		}
	});
	await prisma().$disconnect();

	return items;
};
