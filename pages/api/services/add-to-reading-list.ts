import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const addToReadingList = async (url: string) => {
	await prisma.reading_list.create({
		data: {
			url,
			date_added: new Date()
		}
	});

	await prisma.$disconnect();
};
