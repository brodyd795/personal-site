import React, {FC, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {IYearEvents, timelineEvents} from '../data/timeline-events';
import {Heading} from './heading';

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<div key={year}>
		<span>{year}</span>
		<ul className='md:ml-10 md:border-l-2 border-zinc-500 list-none'>
			{events.map(({heading, subtext}) => (
				<li className='md:m-2' key={subtext}>
					<div>
						<span className='font-semibold'>{heading}</span>
						<ReactMarkdown>{subtext}</ReactMarkdown>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export const Timeline: FC = () => {
	const [showMore, setShowMore] = useState(false);
	const initialEvents = timelineEvents.slice(0, 3);
	const otherEvents = timelineEvents.slice(3);

	return (
		<div
			className='w-full py-10 flex flex-col items-center'
			id='timeline'
		>
			<Heading text='Timeline' />
			<div className='max-w-screen-lg mx-2 mb-10'>
				{initialEvents.map(({year, events}) => (
					<Year year={year} events={events} key={year} />
				))}
				{showMore &&
					otherEvents.map(({year, events}) => (
						<Year year={year} events={events} key={year} />
					))}
				<div className='flex justify-center'>
					<button
						className='bg-zinc-500 border-2 border-black rounded w-28'
						type='button'
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? 'Show less' : 'Show more'}
					</button>
				</div>
			</div>
		</div>
	);
};
