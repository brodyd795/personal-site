import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import useSWR from 'swr';
import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';

const fetcher = (url: RequestInfo) =>
	fetch(url).then((res) => {
		console.log('res :>> ', res);
		return res.json();
	});

const ViewCount: FC = () => {
	const router = useRouter();
	const slug = router.asPath.replace('/blog/', '');
	const {data, error} = useSWR(
		`${getBaseUrl()}/api/controllers/get-views?slug=${slug}`,
		fetcher
	);

	useEffect(() => {
		fetch(`${getBaseUrl()}/api/controllers/update-views`, {
			method: 'PUT',
			body: JSON.stringify({slug})
		});
	}, []);

	if (data) {
		const viewsFromDb = data.views.views;

		return (
			<div>
				{viewsFromDb} view{viewsFromDb > 1 ? 's' : ''}
			</div>
		);
	}

	return <div>... views</div>;
};

export default ViewCount;
