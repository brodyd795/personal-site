import React, {FC} from 'react';
import {IProject, projects} from '../data/projects';
import {Heading} from './heading';

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies, description}
}: IProjectCard) => (
	<a
		href={link}
		target='_blank'
		rel='noreferrer'
		data-testid={`project-card-${name}`}
	>
		<div className='flex flex-col flex-1 justify-between border-zinc-500 border-2 m-1 w-80 h-52 p-2'>
			<span className='text-center font-bold text-xl'>{name}</span>
			<span className='mt-4 mb-auto'>{description}</span>
			{technologies ? (
				<span className='italic mt-2'>{technologies.join(', ')}</span>
			) : null}
		</div>
	</a>
);

export const Projects: FC = () => (
	<div
		className='min-h-screen w-full bg-emerald-100  flex flex-col items-center'
		id='projects'
	>
		<Heading text='Projects' />
		<div className='flex justify-center flex-wrap max-w-screen-lg'>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	</div>
);
