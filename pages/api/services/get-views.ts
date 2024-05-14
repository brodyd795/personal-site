import {blog} from '@prisma/client';

import {prisma} from './prisma-client';

export const getViews = async ({slug}: {slug: string}): Promise<blog[]> => {
	const result = await prisma().blog.findUnique({
		where: {
			id: slug
		}
	});

	if (result === null) {
		const created = await prisma().blog.create({
			data: {
				id: slug,
				views: 1
			}
		});

		return created;
	}

	await prisma().$disconnect();

	return result;
};
