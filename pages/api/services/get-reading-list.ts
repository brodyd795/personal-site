import { prismaClient } from "./prisma-client";

export const getReadingList = async () => {
	const prisma = prismaClient();

	const items = await prisma.reading_list.findMany({
		take: 2,
		orderBy: {
			date_added: 'desc'
		}
	});

	await prisma.$disconnect();

	return items;
};
