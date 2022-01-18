import axios from 'axios';
import cheerio from 'cheerio';
// import linkPreviewGenerator from 'link-preview-generator';

export const scrapePageTitle = async (url: string) => {
	// const previewData = await linkPreviewGenerator("https://www.youtube.com/watch?v=8mqqY2Ji7_g");
	//   console.log(previewData);

	const {data} = await axios.get(url);
	const $ = cheerio.load(data);
	const title = $('title').text();

	return title;
};
