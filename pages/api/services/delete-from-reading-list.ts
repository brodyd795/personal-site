import {prisma} from './prisma-client';

export const deleteFromReadingList = async (url: string): Promise<void> => {
	await prisma().reading_list.deleteMany({
		where: {
			url
		}
	});

	await prisma().$disconnect();
};
