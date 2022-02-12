import React, {FC} from 'react';
import Image from 'next/image';

import {IProject, projects} from '../data/projects';
import {Heading} from './heading';

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies, description, tldr, image: projectImage}
}: IProjectCard) => (
	<a
		href={link}
		target='_blank'
		rel='noreferrer'
		data-testid={`project-card-${name}`}
	>
		<div className='flex flex-col border-zinc-500 border-2 m-1 p-2 ml-0 pl-0'>
			<span className='text-center font-bold text-xl'>{name}</span>
			<div className='flex items-end bg-gray-900'>
				<div className='w-28 h-36 text-center hidden sm:block'>
					<Image
						alt={name}
						src={projectImage.src}
						layout='responsive'
						width={100}
						height={100}
					/>
					<span className='text-xs italic text-white'>{`Credit: ${projectImage.credit}`}</span>
				</div>
				<div className='flex flex-col flex-1 pl-4 bg-blue-200'>
					<span className='mt-4 mb-auto'>
						<span className='font-bold'>{'TL;DR: '}</span>
						{tldr}
					</span>
					<span className='mt-2 mb-auto'>
						<span className='font-bold'>{"What I've learned: "}</span>
						{description}
					</span>
					{technologies ? (
						<span className='italic mt-2'>
							<span className='font-bold'>{'Using: '}</span>
							{technologies.join(', ')}
						</span>
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
