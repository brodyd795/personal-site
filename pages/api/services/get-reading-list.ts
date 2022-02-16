import type {reading_list} from "@prisma/client";

import {prismaClient} from './prisma-client';

export const getReadingList = async (): Promise<reading_list> => {
	const prisma = prismaClient();

	const items = await prisma.reading_list.findMany({
		take: 10,
		orderBy: {
			date_added: 'desc'
		}
	});
	await prisma.$disconnect();

	return items;
};
