import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const ShowMoreLessButton = ({
	showMore,
	setShowMore
}: {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
	<div className='flex justify-center'>
		<button
			className='text-gray-400 mt-8 transition ease-in-out delay-50 hover:text-gray-200 duration-300 flex items-center'
			type='button'
			onClick={() => setShowMore(!showMore)}
		>
			{showMore ? (
				<FontAwesomeIcon icon={faArrowUp} className='mr-2' />
			) : (
				<FontAwesomeIcon icon={faArrowDown} className='mr-2' />
			)}
			{showMore ? 'Show Less' : 'Show More'}
			{showMore ? (
				<FontAwesomeIcon icon={faArrowUp} className='ml-2' />
			) : (
				<FontAwesomeIcon icon={faArrowDown} className='ml-2' />
			)}
		</button>
	</div>
);
