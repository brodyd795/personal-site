import type {GetStaticProps, GetStaticPaths} from 'next';
import Head from 'next/head';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import {getPostFromSlug, getSlugs, PostMeta} from '../../utils/api';
import {Container} from '../../components/container';
import 'highlight.js/styles/atom-one-dark.css';
import {ViewCount} from '../../components/view-count';

interface MDXPost {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: PostMeta;
}

const views = {
	intro: 10,
	second: 11
};

const headerText = 'Blog';
const subHeaderText = ['My personal blog'];

const markdownProseStyles = `
	prose-headings:text-red-500
	prose-a:text-red-500
	prose-ul:text-red-500
	prose-li:text-red-500
	prose-p:text-red-500
	prose-a:no-underline
`;

export default function PostPage({post}: {post: MDXPost}) {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<Container headerText={headerText} subHeaderText={subHeaderText}>
				<main className={`prose ${markdownProseStyles}`}>
					<h1>{post.meta.title}</h1>
					<ViewCount slug={post.meta.slug} />
					<MDXRemote {...post.source} />
				</main>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const {slug} = params as {slug: string};
	const {content, meta} = getPostFromSlug(slug);
	console.log({content, meta});
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, {behavior: 'wrap'}],
				rehypeHighlight
			]
		}
	});

	return {props: {post: {source: mdxSource, meta}}};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: false
	};
};
