import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const ShowMoreLessButton = ({
	showMore,
	setShowMore,
	type
}: {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
	type: string;
}): JSX.Element => {
	const buttonText = `${showMore ? 'Less' : 'More'} ${type}`;

	return (
		<div className='flex justify-center'>
			<button
				className='text-sm text-gray-300 mt-8 transition ease-in-out delay-50 hover:text-gray-200 duration-300 flex items-center py-3 px-4 rounded bg-slate-800 hover:scale-[1.03]'
				type='button'
				aria-label={buttonText}
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? (
					<FontAwesomeIcon icon={faArrowUp} className='mr-3' />
				) : (
					<FontAwesomeIcon icon={faArrowDown} className='mr-3' />
				)}
				{buttonText}
				{showMore ? (
					<FontAwesomeIcon icon={faArrowUp} className='ml-3' />
				) : (
					<FontAwesomeIcon icon={faArrowDown} className='ml-3' />
				)}
			</button>
		</div>
	);
};
