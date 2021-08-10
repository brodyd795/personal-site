import React, {FC} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {IProject, projects} from '../data/projects';
import {StyledH2} from './styles';

const StyledProjectCard = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 200px;
	border: 2px solid black;
	border-radius: 10px;
	text-align: center;
	margin: 8px;
	text-decoration: none;
	color: grey;
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 2px 4px red;
	}
`;

const StyledCardName = styled.div`
	font-size: 22px;
	margin-top: 12px;
	font-weight: bold;
	margin-bottom: 20px;
`;

const StyledProjectCardsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const StyledTechnologies = styled.div`
	font-size: 16px;
	font-style: italic;
	margin-top: auto;
	margin-bottom: auto;
`;

const StyledPhotoCredit = styled.div`
	font-size: 10px;
	margin-top: 12px;
	font-style: italic;

	a {
		text-decoration: underline;
		color: grey;
	}
`;

const StyledCardTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
	padding: 0 8px 4px;
`;

const StyledProjectsContainer = styled.div`
	margin: 0 24px;
`;

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies, image}
}: IProjectCard) => (
	<StyledProjectCard href={link} target='_blank'>
		<Image alt='project card' src={image.src} height={500} width={500} />
		<StyledCardTextContainer>
			<StyledCardName>{name}</StyledCardName>
			{technologies ? (
				<StyledTechnologies>{technologies.join(', ')}</StyledTechnologies>
			) : null}
			<StyledPhotoCredit>
				photo cred:{' '}
				<a href={`https://unsplash.com/${image.credit}`}>{image.credit}</a>
			</StyledPhotoCredit>
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
