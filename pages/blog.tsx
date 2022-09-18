import {Container} from '../components/container';

import {getAllPosts, PostMeta} from '../utils/api';
import Articles from '../components/articles';

const headerText = 'Blog';
const subHeaderText = ['My personal blog'];

export default function Blog({posts}: {posts: PostMeta[]}) {
	return (
		<Container headerText={headerText} subHeaderText={subHeaderText}>
			<main>
				<h1>Articles</h1>
				<Articles posts={posts} />
			</main>
		</Container>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts()
		.slice(0, 9)
		.map((post) => post.meta);

	return {props: {posts}};
}
