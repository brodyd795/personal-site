import React, {FC, useRef, useState} from 'react';

import {IYearEvents, timelineEvents} from './timeline-events';
import {Heading} from './heading';
import {ShowMoreLessButton} from './buttons';
import {Collapse} from './collapse';

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<div key={year} className={'mt-8'}>
		<span>{year}</span>
		<ul className='mt-2 pl-4 border-zinc-500 list-none'>
			{events.map(({heading, subtext}) => (
				<li className='mt-4' key={heading}>
					<div>
						<span className='block font-semibold'>{heading}</span>
						<span className={'block mt-1 text-gray-400'}>{subtext}</span>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export const Timeline: FC = () => {
	const [showMore, setShowMore] = useState(false);
	const scrollToRef = useRef<HTMLDivElement>(null);

	const initialEvents = timelineEvents.slice(0, 3);
	const otherEvents = timelineEvents.slice(3);

	return (
		<div
			className='w-full mt-10 flex flex-col items-center'
			id='timeline'
			ref={scrollToRef}
		>
			<Heading text='Timeline' />
			<div className='mx-2'>
				{initialEvents.map(({year, events}) => (
					<Year year={year} events={events} key={year} />
				))}
				<Collapse showMore={showMore} scrollToRef={scrollToRef}>
					{otherEvents.map(({year, events}) => (
						<Year year={year} events={events} key={year} />
					))}
				</Collapse>
				<ShowMoreLessButton
					showMore={showMore}
					setShowMore={setShowMore}
					type={'events'}
				/>
			</div>
		</div>
	);
};
