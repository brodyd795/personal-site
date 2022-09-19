import {FC} from 'react';
import useSWR from 'swr';
import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';

const viewCounts: Record<string, number> = {
	intro: 11,
	second: 5
};

const fetcher = (url: RequestInfo) =>
	fetch(url).then((res) => {
		console.log('res :>> ', res);
		return res.json();
	});

const ViewCount: FC<{slug: string}> = ({}) => {
	let slug = 0;
	const {data, error} = useSWR(
		`${getBaseUrl()}/api/controllers/get-views`,
		fetcher
	);
	console.log({data, error});

	if (typeof window === 'undefined') {
		console.log('server');
	} else {
		const path = window.location.pathname.split('/blog/');
		slug = path[1];
		console.log('slug :>> ', slug);
	}

	// TODO: fetch views here with slug
	const views = slug ? viewCounts[slug] : 0;

	if (data) {
		const viewsFromDb = data.views[0].views;
		return <div>{viewsFromDb} views</div>;
	}

	return <div>... views</div>;
	// return <div style={{height: '28px'}}></div>;
};

export default ViewCount;
