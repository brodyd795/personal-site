import React from 'react';

import {Container} from '../components/container';
import {Projects} from '../components/projects';
import {Timeline} from '../components/timeline';
import {Contact} from '../components/contact';
import {About} from '../components/about';

const headerText = 'Brody Dingel';
const subHeaderText = ['Full-stack software engineer at Bestow, Inc.'];

const Home = (): JSX.Element => (
	<Container headerText={headerText} subHeaderText={subHeaderText}>
		<main>
			<About />
			<Projects />
			<Timeline />
			<Contact />
		</main>
	</Container>
);

export default Home;
