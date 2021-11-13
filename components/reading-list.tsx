import React, {FC} from 'react';
import useSWR from 'swr';
import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export const ReadingList: FC = () => {
	const {data, error} = useSWR<GetReadingListResponse>('/api/controllers/get-reading-list', fetcher);
	console.log('data :>> ', data);

	return (
		<div className='min-h-screen w-full flex flex-col' id='reading-list'>
			<h2>Reading List</h2>
			{!data && !error && <div>Loading...</div>}
			{error && <div>An error occurred.</div>}
			{data?.list.map((item) => <div>{item.url}</div>)}
		</div>
	);
};
