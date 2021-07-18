import React, {FC} from 'react';
import styled from 'styled-components';
import {IProject, projects} from '../data/projects';

const StyledH2 = styled.h2`
	text-align: center;
`;

const StyledProjectCard = styled.a`
	display: flex;
	flex-direction: column;
	width: 200px;
	border: 2px solid black;
	text-align: center;
	margin: 8px;
	text-decoration: none;
	color: grey;
`;

const StyledCardName = styled.span`
	font-size: 20px;
	margin-top: 4px;
`;

const StyledCardDescription = styled.span`
	font-size: 16px;
	margin: 4px;
`;

const StyledProjectCardsContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ProjectCard: FC<IProject> = ({name, description, link}: IProject) => (
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
			{projects.map(({name, description, link}) => (
				<ProjectCard
					key={name}
					name={name}
					description={description}
					link={link}
				/>
			))}
		</StyledProjectCardsContainer>
	</div>
);
