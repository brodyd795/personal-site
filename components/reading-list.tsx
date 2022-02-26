import React, {FC} from 'react';
import useSWR from 'swr';
import {reading_list} from '@prisma/client';
import {faExternalLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ReactMarkdown from 'react-markdown';
import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';
import {getBaseUrl} from '../utils/url-helpers';
import {Heading} from './heading';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

interface IReadingCard {
	data: reading_list;
}

const ReadingCard: FC<IReadingCard> = ({
	data: {url, title, domain, description}
}) => (
	<a
		href={url}
		target='_blank'
		rel='noreferrer'
		data-testid={`project-card-${title}`}
	>
		<div className='flex flex-col bg-sky-100 border-zinc-500 border-2 drop-shadow-md rounded my-3 px-2 transition ease-in-out delay-50 hover:scale-[1.01] hover:scale-102 hover:bg-indigo-100 duration-300'>
			<div className='flex'>
				<div className='flex flex-col ml-4 mr-2 pb-2 flex-1'>
					<div className='w-100'>
						<div className='mt-4 mb-auto flex flex-col sm:flex-row justify-between'>
							<div className='font-bold'>{title}</div>
							<div>
								<span>
									<i>{domain}</i>
								</span>
								<FontAwesomeIcon icon={faExternalLink} className='pl-1' />
							</div>
						</div>
					</div>
					<div className='mt-2'>
						{description && <ReactMarkdown>{description}</ReactMarkdown>}
					</div>
				</div>
			</div>
		</div>
	</a>
);

export const ReadingList: FC = () => {
	const {data, error} = useSWR<GetReadingListResponse, Error>(
		`${getBaseUrl()}/api/controllers/get-reading-list`,
		fetcher
	);

	return (
		<div className='mt-10 w-full flex flex-col items-center' id='reading-list'>
			<Heading text='Reading List' />
			{!data && !error && <div>Loading...</div>}
			{error && <div>An error occurred.</div>}
			<div className='mx-1 mb-10'>
				<h2 className='text-xl'>
					{"Check out what I've been reading recently 🤓"}
				</h2>
				<div className={'mt-4 text-lg'}>
					<p>Have a recommendation? Shoot me a link below!</p>
				</div>
				<div className='mt-4'>
					{data?.list.map((readingItem) => (
						<ReadingCard data={readingItem} key={readingItem.id} />
					))}
				</div>
			</div>
		</div>
	);
};
