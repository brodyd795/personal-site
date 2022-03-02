import {prisma} from './prisma-client';
import {reading_list} from '../../../generated/client';

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
