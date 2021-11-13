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

	return (
		<li
			className={`rounded-full w-10 h-10 ${
				isActive ? 'bg-blue-500' : 'bg-red-500'
			}`}
		>
			<button
				type='button'
				onClick={() => {
					router.push(section);
				}}
			>
				–––
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
		<div className='fixed top-20 left-0 z-20'>
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
	)
}
