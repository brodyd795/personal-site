import {blog} from '@prisma/client';

import {prisma} from './prisma-client';

export const getViews = async (): Promise<blog[]> => {
	await prisma().blog.update({
		where: {
			id: 'first'
		},
		data: {
			views: 2
		}
	});
	const result = await prisma().blog.findMany({
		take: 1
	});

	await prisma().$disconnect();

	return result;
};
