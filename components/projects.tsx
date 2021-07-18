import React, {FC} from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
	text-align: center;
`;

const StyledProjectCard = styled.a`
	display: flex;
	flex-direction: column;
	width: 150px;
	border: 2px solid black;
	text-align: center;
	margin: 8px;
	text-decoration: none;
	color: grey;
`;

const StyledCardName = styled.span`
	font-size: 20px;
`;

const StyledCardDescription = styled.span`
	font-size: 16px;
	margin-top: 4px;
`;

const StyledProjectCardsContainer = styled.div`
	display: flex;
`;

interface IProjectCard {
	name: string;
	description: string;
	link: string;
}

const ProjectCard: FC<IProjectCard> = ({
	name,
	description,
	link
}: IProjectCard) => (
	<StyledProjectCard href={link} target='_blank'>
		<img alt='project card' src='https://via.placeholder.com/150' />
		<StyledCardName>{name}</StyledCardName>
		<StyledCardDescription>{description}</StyledCardDescription>
	</StyledProjectCard>
);

export const Projects: FC = () => (
	<div>
		<StyledH2>Projects</StyledH2>
		<StyledProjectCardsContainer>
			<ProjectCard
				name='Accounting'
				description='Personal accounting app'
				link='https://github.com/brodyd795/accounting'
			/>
			<ProjectCard
				name='Course Website'
				description='Website for my students'
				link='https://github.com/brodyd795/course-website'
			/>
			<ProjectCard
				name='#100 Days of Code'
				description='My first round!'
				link='https://github.com/brodyd795/100-days-of-code'
			/>
		</StyledProjectCardsContainer>
	</div>
);
