import React, {FC, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {IYearEvents, timelineEvents} from '../data/timeline-events';
import { Heading } from './heading';

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<div key={year}>
		<span>{year}</span>
		<ul className='pl-8 list-none'>
			{events.map(({heading, subtext}) => (
				<li className='m-4' key={subtext}>
					<div>
						<span>{heading}</span>
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
		<div className='min-h-screen w-full flex flex-col items-center' id='timeline'>
			<Heading text='Timeline' />
			<div className='max-w-screen-lg'>
				{initialEvents.map(({year, events}) => (
					<Year year={year} events={events} key={year} />
				))}
				{!showMore && (
					<div className='flex justify-center'>
						<button
							className='bg-zinc-500 border-2 border-black rounded w-28'
							type='button'
							onClick={() => setShowMore(true)}
						>
							See All
						</button>
					</div>
				)}
				{showMore &&
					otherEvents.map(({year, events}) => (
						<Year year={year} events={events} key={year} />
					))}
			</div>
		</div>
	);
};
