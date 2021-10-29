import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

import {Container} from '../components/container';
import {Projects} from '../components/projects';
import {Timeline} from '../components/timeline';
import {Contact} from '../components/contact';

const headerText = "Hi, I'm Brody.";
const subHeaderText =
	"I'm a full-stack software engineer. I currently work as a Software Engineer at Hy-Vee on the Browse/Shop team. Nice to meet you!";

const getProgress = () => {
	if (typeof window === 'undefined') {
		return 0;
	}
	const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

interface INavButton {
	isActive: boolean;
	section: string;
}

const NavButton = ({isActive, section}: INavButton) => {
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

const Home = () => {
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
		<Container headerText={headerText} subHeaderText={subHeaderText}>
			<div className='fixed top-20 left-0 z-20'>
				<ul>
					<NavButton isActive={progress >= 0 && progress < 25} section='#' />
					<NavButton
						isActive={progress >= 25 && progress < 50}
						section='#projects'
					/>
					<NavButton
						isActive={progress >= 50 && progress < 75}
						section='#timeline'
					/>
					<NavButton
						isActive={progress >= 75 && progress <= 100}
						section='#contact'
					/>
				</ul>
			</div>
			<main className='flex flex-col flex-1'>
				<Projects />
				<Timeline />
				<Contact />
			</main>
		</Container>
	);
};

export default Home;
