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
	border: 8px solid red;
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
			// placeholder='blur'
		/>
		<StyledCardTextContainer>
			<StyledCardName>{name}</StyledCardName>
			{technologies ? (
				<StyledTechnologies>{technologies.join(', ')}</StyledTechnologies>
			) : null}
		</StyledCardTextContainer>
	</StyledProjectCard>
);

const StyledContainer = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	border: 8px solid blue;
`;

const StyledCard = styled.div`
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	min-width: 8rem;
	flex: 1;
`;

const TestCard = () => (
	<StyledCard>
		<Image
			src='/project-images/secret-message.jpg'
			// just put the original width and height of the original image, in order to provide the right aspect ratio
			// Next.js will automatically reduce the size if the rendered image needs to be smaller.
			width={500}
			height={500}
			layout='responsive'
			className='card-img-top'
			alt='...'
		/>
		<div className='card-body'>
			<h5 className='card-title'>Card title</h5>
			<p className='card-text'>
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href='#' className='btn btn-primary'>
				Go somewhere
			</a>
		</div>
	</StyledCard>
);

const Test = () => (
	<StyledContainer>
		<TestCard />
		<TestCard />
		<TestCard />
		<TestCard />
		<TestCard />
	</StyledContainer>
);

export const Projects: FC = () => (
	<StyledProjectsContainer>
		{/* <StyledH2>Projects</StyledH2>
		<StyledProjectCardsContainer>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</StyledProjectCardsContainer> */}
		<Test />
	</StyledProjectsContainer>
);
