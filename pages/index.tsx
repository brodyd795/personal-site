import React from 'react';
import styled from 'styled-components';
import {Container} from '../components/container';
import {Projects} from '../components/projects';

const StyledMain = styled.main`
	display: flex;
	flex: 1;
`;

const headerText = "Hi, I'm Brody.";
const subHeaderText =
	"I'm a full-stack software engineer. I currently work as a Software Engineer at Hy-Vee on the Browse/Shop team. Nice to meet you!";

const Home = () => (
	<Container headerText={headerText} subHeaderText={subHeaderText}>
		<StyledMain>
			<Projects />
		</StyledMain>
	</Container>
);

export default Home;
