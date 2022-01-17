import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

const getProgress = () => {
	if (typeof window === 'undefined') {
		return 0;
	}
	const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

interface IProgressButton {
	isActive: boolean;
	section: string;
}

const ProgressButton = ({isActive, section}: IProgressButton) => {
	const router = useRouter();
	const buttonSize = 5;

	return (
		<li
			className={`rounded-full w-${buttonSize} m-5 h-${buttonSize} cursor-pointer ${
				isActive ? 'bg-blue-500' : 'bg-red-500'
			}`}
		>
			<button
				className={`h-${buttonSize} w-${buttonSize}`}
				id={`progress-button-${section}`}
				type='button'
				onClick={() => {
					router.push(section);
				}}
			>
				<label
					htmlFor={`progress-button-${section}`}
					hidden
				>{`Go to ${section}`}</label>
			</button>
		</li>
	);
};

export const ProgressBar = () => {
	const [, setScrollY] = useState(0);

	const scrollListener = () => {
		setScrollY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});
	const progress = getProgress();

	return (
		<div className='fixed right-0 top-0 bottom-0 flex items-center ml-2 z-20'>
			<ul>
				<ProgressButton isActive={progress >= 0 && progress < 20} section='#' />
				<ProgressButton
					isActive={progress >= 20 && progress < 40}
					section='#projects'
				/>
				<ProgressButton
					isActive={progress >= 40 && progress < 60}
					section='#timeline'
				/>
				<ProgressButton
					isActive={progress >= 60 && progress <= 80}
					section='#contact'
				/>
				<ProgressButton
					isActive={progress >= 80 && progress <= 100}
					section='#reading-list'
				/>
			</ul>
		</div>
	);
};
