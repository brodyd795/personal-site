import {FC} from 'react';

import {Container} from '../components/container';
import {getAllPosts, PostMeta} from '../utils/api';
import Articles from '../components/articles';
import type {BlogPost} from '../utils/api';

const headerText = 'Blog';
const subHeaderText = ['My personal blog'];

const Blog: FC<{posts: PostMeta[]}> = ({posts}) => {
	return (
		<Container headerText={headerText} subHeaderText={subHeaderText}>
			<main>
				<h1>Articles</h1>
				<Articles posts={posts} />
			</main>
		</Container>
	);
};

export default Blog;

export function getStaticProps(): {props: {posts: BlogPost}} {
	const posts = getAllPosts()
		.slice(0, 9)
		.map((post) => post.meta);

	return {props: {posts}};
}
