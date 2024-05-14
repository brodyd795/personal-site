import {FC} from 'react';

import type {GetStaticProps, GetStaticPaths} from 'next';
import Head from 'next/head';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import dynamic from 'next/dynamic';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'highlight.js/styles/atom-one-dark.css';

import {getPostFromSlug, getSlugs, PostMeta} from '../../utils/api';
import {Container} from '../../components/container';

interface MDXPost {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: PostMeta;
}

const headerText = 'Blog';
const subHeaderText = ['My personal blog'];

const markdownProseStyles = `
	// this enables default typography styles
	prose

	// and these override them
	prose-headings:text-red-500
	prose-a:text-red-500
	prose-ul:text-red-500
	prose-li:text-red-500
	prose-p:text-red-500
	prose-a:no-underline
`;

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
	ViewCount: dynamic(() => import('../../components/view-count'))
};

const PostPage: FC<{post: MDXPost}> = ({post}) => {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<Container headerText={headerText} subHeaderText={subHeaderText}>
				<main className={markdownProseStyles}>
					<MDXRemote {...post.source} components={components} />
				</main>
			</Container>
		</>
	);
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
	const {slug} = params as {slug: string};
	const {content, meta} = getPostFromSlug(slug);
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

export const getStaticPaths: GetStaticPaths = () => {
	const paths = getSlugs().map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: false
	};
};
