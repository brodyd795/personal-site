import linkPreviewGenerator from 'link-preview-generator';
import {prisma} from './prisma-client';

export const addToReadingList = async (url: string): Promise<void> => {
	const {
		title,
		description,
		domain,
		img: image
	} = await linkPreviewGenerator(url);

	const newItem = {
		url,
		date_added: new Date(),
		title,
		description,
		domain,
		image
	};

	await prisma().reading_list.create({
		data: newItem
	});

	await prisma().$disconnect();
};
