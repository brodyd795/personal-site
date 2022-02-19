import React from 'react';

import {Container} from '../components/container';
import {Projects} from '../components/projects';
import {Timeline} from '../components/timeline';
import {Contact} from '../components/contact';
import {ReadingList} from '../components/reading-list';

const headerText = "Hi, I'm Brody.";
const subHeaderText = [
	"I'm a full-stack software engineer at Hy-Vee.",
	'Nice to meet you!'
];

const Home = (): JSX.Element => (
	<Container headerText={headerText} subHeaderText={subHeaderText}>
		<main className='flex flex-col flex-1'>
			<Projects />
			<Timeline />
			<ReadingList />
			<Contact />
		</main>
	</Container>
);

export default Home;
