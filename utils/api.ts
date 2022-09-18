import path from 'path';
import fs from 'fs';
import {sync} from 'glob';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getPostFromSlug = (slug: string): BlogPost => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const {content, data} = matter(source) as unknown as {
		content: string;
		data: PostMeta;
	};

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt ?? '',
			title: data.title ?? slug,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString()
		}
	};
};

export const getSlugs = (): string[] => {
	const postsPaths = sync(`${POSTS_PATH}/*.mdx`);

	return postsPaths.map((postPath) => {
		const parts = postPath.split('/');
		const fileName = parts[parts.length - 1];
		const [slug] = fileName.split('.');
		return slug;
	});
};

export const getAllPosts = () => {
	const posts = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;
			return 0;
		})
		.reverse();
	return posts;
};

export type BlogPost = {
	content: string;
	meta: PostMeta;
};

export type PostMeta = {
	excerpt: string;
	slug: string;
	title: string;
	tags: string[];
	date: string;
};
