import {FC} from 'react';

const viewCounts: Record<string, number> = {
	intro: 11,
	second: 2
};

export const ViewCount: FC<{slug: string}> = ({slug}) => {
	const views = viewCounts[slug];

	return <div>{views} views</div>;
};
