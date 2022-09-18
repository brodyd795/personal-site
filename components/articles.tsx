import Link from 'next/link';
import {FC} from 'react';
import type {PostMeta} from '../utils/api';

const Articles: FC<{posts: PostMeta[]}> = ({posts}) => {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.slug}>
					<div>
						<Link href={`/posts/${post.slug}`}>{post.title}</Link>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Articles;
