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
	color: #1d1e22;
	box-shadow: 4px 4px #535457;
	transition: box-shadow 0.2s;
	padding-bottom: 4px;

	&:hover {
		box-shadow: 6px 6px #535457;
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

const StyledImage = styled(Image)`
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies, image}
}: IProjectCard) => (
	<StyledProjectCard href={link} target='_blank'>
		<StyledImage
			alt='project card'
			src={image.src}
			layout='responsive'
			width={500}
			height={500}
			priority
		/>
		<StyledCardTextContainer>
			<StyledCardName>{name}</StyledCardName>
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
