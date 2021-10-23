import React, {FC} from 'react';
import {IProject, projects} from '../data/projects';

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies}
}: IProjectCard) => (
	<a
		href={link}
		target='_blank'
		rel='noreferrer'
		data-testid={`project-card-${name}`}
	>
		<div className='flex flex-col flex-1 justify-between'>
			<span>{name}</span>
			{technologies ? (
				<span className='italic'>{technologies.join(', ')}</span>
			) : null}
		</div>
	</a>
);

export const Projects: FC = () => (
	<div>
		<h2>Projects</h2>
		<div className='flex justify-center flex-wrap'>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	</div>
);
