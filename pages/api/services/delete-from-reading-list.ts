import {prismaClient} from './prisma-client';

export const deleteFromReadingList = async (url: string): Promise<void> => {
	const prisma = prismaClient();

	await prisma.reading_list.deleteMany({
        where: {
            url
        }
    });

	await prisma.$disconnect();
};
