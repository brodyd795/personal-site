import axios from 'axios';
import cheerio from 'cheerio';

export const scrapePageTitle = async (url: string) => {
	const {data} = await axios.get(url);
	const $ = cheerio.load(data);
	const title = $('title').text();

	return title;
};
