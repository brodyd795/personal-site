import React, {FC} from 'react';
import useSWR from 'swr';
import { reading_list } from '@prisma/client';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';
import {Heading} from './heading';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const ReadingCard: FC = ({data: {id, url, title, image, date_added, domain, description}, index}: {data: reading_list}) => (
	<a
		href={url}
		target='_blank'
		rel='noreferrer'
		data-testid={`project-card-${title}`}
	>
		<div className='flex flex-col border-zinc-500 border-2 my-2 px-2'>
			<div className='flex'>
				<div className='flex items-center'>{`${String(index + 1).padStart(2, '0')}`}</div>
				<div className='flex flex-col ml-4 mr-2 pb-2 flex-1'>
					<div className='w-100'>
						<div className='mt-4 mb-auto flex justify-between'>
							<div className='font-bold'>{title}</div>
							<div>
								<span><i>{domain}</i></span>
								<a class="external" href="https://example.org" target="_blank"><FontAwesomeIcon icon={faExternalLink} className='pl-1' /></a>
							</div>
						</div>
					</div>
					<div className='mt-2'>
						<span>{description}</span>
					</div>
				</div>
			</div>
		</div>
	</a>
);

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
				<h2 className='text-xl'>{"Here's what I've been reading recently:"}</h2>
				<div className='mt-4'>
					{data?.list.map((readingItem, index) => (
						<ReadingCard data={readingItem} key={readingItem.id} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
