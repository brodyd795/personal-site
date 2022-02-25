import React, {FC, useState} from 'react';

import {IYearEvents, timelineEvents} from './timeline-events';
import {Heading} from './heading';
import {Hr} from "./hr";

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<div key={year} className={'mt-8'}>
		<span>{`🗓 ${year}`}</span>
		<ul className='mt-2 border-zinc-500 list-none'>
			{events.map(({heading, subtext}) => (
				<li className='mt-4' key={heading}>
					<div>
						<span className='block font-semibold'>{heading}</span>
						<span className={'block mt-1'}>{subtext}</span>
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
			<div className='mx-2'>
				{initialEvents.map(({year, events}) => (
					<Year year={year} events={events} key={year} />
				))}
				{showMore &&
					otherEvents.map(({year, events}) => (
						<Year year={year} events={events} key={year} />
					))}
				<div className='flex justify-center'>
					<button
						className='bg-sky-100 border-2 border-black rounded w-28 mt-8 transition ease-in-out delay-50 hover:scale-105 hover:bg-indigo-100 duration-300'
						type='button'
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? 'Show less' : 'Show more'}
					</button>
				</div>
			<Hr />
			</div>
		</div>
	);
};
