import { prismaClient } from "./prisma-client";

export const addToReadingList = async (url: string) => {
	const prisma = prismaClient();

	await prisma.reading_list.create({
		data: {
			url,
			date_added: new Date()
		}
	});

	await prisma.$disconnect();
};
