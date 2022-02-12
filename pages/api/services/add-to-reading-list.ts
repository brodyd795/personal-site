import linkPreviewGenerator from 'link-preview-generator';

import {prismaClient} from './prisma-client';

export const addToReadingList = async (url: string) => {
	const {
		title,
		description,
		domain,
		img: image
	} = await linkPreviewGenerator(url);

	const prisma = prismaClient();

	await prisma.reading_list.create({
		data: {
			url,
			date_added: new Date(),
			title,
			description,
			domain,
			image
		}
	});

	await prisma.$disconnect();
};
