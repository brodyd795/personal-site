import {prisma} from './prisma-client';

export const updateViews = async (slug: string): Promise<void> => {
	await prisma().blog.update({
		where: {
			id: slug
		},
		data: {
			views: {
				increment: 1
			}
		}
	});

	await prisma().$disconnect();
};
