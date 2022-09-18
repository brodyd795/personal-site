import Link from 'next/link';
import type {PostMeta} from '../utils/api';

export default function Articles({posts}: {posts: PostMeta[]}) {
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
}
