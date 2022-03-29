import {getLinkPreview} from 'link-preview-js';
import {prisma} from './prisma-client';

export const addToReadingList = async (url: string): Promise<void> => {
	const preview = await getLinkPreview(url);

	const {title, description, images} = preview;
	const urlObject = new URL(url);

	const newItem = {
		url,
		date_added: new Date(),
		title,
		description,
		domain: urlObject.hostname.replace('www.', ''),
		image: images[0]
	};

	await prisma().reading_list.create({
		data: newItem
	});

	await prisma().$disconnect();
};
