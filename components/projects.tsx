import React, {FC} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
	flex-wrap: wrap;
`;

const StyledTechnologies = styled.span`
	font-size: 12px;
`;

const StyledPhotoCredit = styled.span`
	font-size: 10px;
`;

const StyledCardTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
	padding: 0 8px 8px;
`;

const StyledProjectsContainer = styled.div`
	margin: 0 24px;
`;

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, description, link, technologies, image}
}: IProjectCard) => (
	<StyledProjectCard href={link} target='_blank'>
		<Image alt='project card' src={image.src} height={500} width={500} />
		<StyledCardTextContainer>
			<StyledPhotoCredit>
				Photo cred:{' '}
				<a href={`https://unsplash.com/${image.credit}`}>{image.credit}</a>
			</StyledPhotoCredit>
			<StyledCardName>{name}</StyledCardName>
			<StyledCardDescription>{description}</StyledCardDescription>
			{technologies ? (
				<StyledTechnologies>{technologies.join(', ')}</StyledTechnologies>
			) : null}
		</StyledCardTextContainer>
	</StyledProjectCard>
);

export const Projects: FC = () => (
	<StyledProjectsContainer>
		<StyledH2>Projects</StyledH2>
		<StyledProjectCardsContainer>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</StyledProjectCardsContainer>
	</StyledProjectsContainer>
);
