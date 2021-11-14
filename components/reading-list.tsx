import React, {FC} from 'react';
import useSWR from 'swr';

import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export const ReadingList: FC = () => {
	const {data, error} = useSWR<GetReadingListResponse>(
		`${getBaseUrl()}/api/controllers/get-reading-list`,
		fetcher
	);

	return (
		<div className='min-h-screen w-full flex flex-col' id='reading-list'>
			<h2>Reading List</h2>
			{!data && !error && <div>Loading...</div>}
			{error && <div>An error occurred.</div>}
			{data?.list.map((item) => (
				<div key={item.id}>{item.url}</div>
			))}
		</div>
	);
};
