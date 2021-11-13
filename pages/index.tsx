import React from 'react';

import {Container} from '../components/container';
import {Projects} from '../components/projects';
import {Timeline} from '../components/timeline';
import {Contact} from '../components/contact';
import { ReadingList } from '../components/reading-list';
import { ProgressBar } from '../components/progress-bar';

const headerText = "Hi, I'm Brody.";
const subHeaderText =
	"I'm a full-stack software engineer. I currently work as a Software Engineer at Hy-Vee on the Browse/Shop team. Nice to meet you!";

const Home = () => (
	<Container headerText={headerText} subHeaderText={subHeaderText}>
		<ProgressBar />
		<main className='flex flex-col flex-1'>
			<Projects />
			<Timeline />
			<Contact />
			<ReadingList />
		</main>
	</Container>
);

export default Home;
