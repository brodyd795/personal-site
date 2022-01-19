import React, {FC} from 'react';
import Image from 'next/image';

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
		className='max-h-52'
	>
		<div className='flex flex-col border-zinc-500 border-2 m-1 p-2'>
			<span className='text-center font-bold text-xl'>{name}</span>
			<div className='flex'>
				<div className='w-28 h-28'>
					<Image
						alt={name}
						src='/project-images/accounting.jpg'
						layout='responsive'
						width={100}
						height={100}
						priority
					/>
				</div>
				<div className='flex flex-col flex-1 ml-4'>
					<span className='mt-4 mb-auto'>{description}</span>
					{technologies ? (
						<span className='italic mt-2'>{technologies.join(', ')}</span>
					) : null}
				</div>
			</div>
		</div>
	</a>
);

export const Projects: FC = () => (
	<div
		className='w-full py-10 bg-emerald-100 flex flex-col items-center'
		id='projects'
	>
		<Heading text='Projects' />
		<div className='flex flex-col justify-center flex-wrap max-w-screen-lg'>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	</div>
);
