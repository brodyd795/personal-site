import React from 'react';

import {Container} from '../components/container';
import {Projects} from '../components/projects';
import {Timeline} from '../components/timeline';
import {Contact} from '../components/contact';
import {ReadingList} from '../components/reading-list';

const headerText = "Brody Dingel";
const subHeaderText = [
	"Full-stack software engineer at Hy-Vee."
];

const Home = (): JSX.Element => (
	<Container headerText={headerText} subHeaderText={subHeaderText}>
		<main>
			<Projects />
			<Timeline />
			<ReadingList />
			<Contact />
		</main>
	</Container>
);

export default Home;
