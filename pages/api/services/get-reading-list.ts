import linkPreviewGenerator from 'link-preview-generator';

import {prismaClient} from './prisma-client';

export const getReadingList = async () => {
	const prisma = prismaClient();

	const rawItemData = await prisma.reading_list.findMany({
		take: 2,
		orderBy: {
			date_added: 'desc'
		}
	});
	await prisma.$disconnect();

	// @ts-ignore
	const previewData = await Promise.all(
		rawItemData.map((item) => linkPreviewGenerator(item.url))
	);

	const finalData = rawItemData.map((item, index) => ({
		...item,
		...previewData[index]
	}));

	return finalData;
};
