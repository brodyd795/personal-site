import React from 'react';
import ReactMarkdown from 'react-markdown';

import {Container} from '../components/container';
import {aboutData} from '../data/about';
import {Contact} from '../components/contact';

const About = () => (
	<Container headerText='About' subHeaderText=''>
		<main>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<h2>Hi! I'm Brody 👋🏻</h2>
			{aboutData.map((paragraph) => (
				<ReactMarkdown key={paragraph}>{paragraph}</ReactMarkdown>
			))}
			<Contact />
		</main>
	</Container>
);

export default About;
