import React, {FC} from 'react';
import useSWR from 'swr';

import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';
import {Heading} from './heading';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export const ReadingList: FC = () => {
	const {data, error} = useSWR<GetReadingListResponse>(
		`${getBaseUrl()}/api/controllers/get-reading-list`,
		fetcher
	);

	return (
		<div className='mt-10 w-full flex flex-col items-center' id='reading-list'>
			<Heading text='Reading List' />
			{!data && !error && <div>Loading...</div>}
			{error && <div>An error occurred.</div>}
			<div className='max-w-screen-lg mx-2 mb-10'>
				<h3>{"Here's what I've been reading recently"}</h3>
				{data?.list.map(({id, url, title, image, date_added, description}) => (
					<div key={id}>
						<div>{url}</div>
						<div>{title}</div>
						<div>{image}</div>
						<div>{date_added}</div>
						<div>{description}</div>
					</div>
				))}
			</div>
		</div>
	);
};
