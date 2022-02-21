import React, {FC, useState} from 'react';

import {IYearEvents, timelineEvents} from './timeline-events';
import {Heading} from './heading';

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<div key={year} className={'mt-8'}>
		<span>{`🗓 ${year}`}</span>
		<ul className='mt-2 border-zinc-500 list-none'>
			{events.map(({heading, subtext}) => (
				<li className='mt-4' key={heading}>
					<div>
						<span className='font-semibold'>{heading}</span>
						{subtext}
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
		<div className='w-full mt-10 flex flex-col items-center' id='timeline'>
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
