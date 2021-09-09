import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import {Container} from '../components/container';
import {aboutData} from '../data/about';
import {Contact} from '../components/contact';

const StyledP = styled(ReactMarkdown)`
	line-height: 1.5;
	font-size: 20px;
	padding: 0 12px;
`;

const StyledHeading = styled.h2`
	margin-top: 30px;
	padding: 12px;
`;

const About = () => (
	<Container headerText='About' subHeaderText=''>
		<main>
			<StyledHeading>{`Hi! I'm Brody 👋🏻`}</StyledHeading>
			{aboutData.map((paragraph) => (
				<StyledP>{paragraph}</StyledP>
			))}
			<Contact />
		</main>
	</Container>
);

export default About;
