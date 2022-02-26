import React, {FC, useState} from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {IProject, projects} from '../data/projects';
import {Heading} from './heading';
import {Hr} from "./hr";

interface IProjectCard {
	project: IProject;
}

const ProjectCard: FC<IProjectCard> = ({
	project: {name, link, technologies, description, tldr}
}: IProjectCard) => {
	const [showMore, setShowMore] = useState(false);
	const lineClampStyles = !showMore ? 'line-clamp-2' : '';

	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			data-testid={`project-card-${name}`}
		>
			<div className='flex flex-col border-zinc-500 rounded-lg border-2 my-2 px-2 py-3'>
				<div className={'flex justify-center relative'}>
					<h4 className='text-center font-bold text-xl mt-2'>{name}</h4>
					<FontAwesomeIcon icon={faGithub} className='absolute w-6 h-6 top-3 right-0' />
				</div>
				<div className='flex items-end'>
					<div className='flex flex-col flex-1 pl-4'>
					<span className='mt-4 mb-auto'>
						{tldr}
					</span>
						<div className='mt-4 mb-auto'>
							<span className='font-bold block'>{"What I learned: "}</span>
							<span className={`${lineClampStyles} sm:line-clamp-none`}>
								{description}
							</span>
							{!showMore && <button className={'text-slate-500 sm:hidden'} type={'button'} onClick={(e) => {
								e.preventDefault();
								setShowMore(true);
							}}>See all</button>}
					</div>
						{technologies ? (
							<div className={'mt-2'}>
								<span className='font-bold block'>{'Technologies:'}</span>
								<span>{technologies.join(', ')}</span>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</a>
	)
};

export const Projects: FC = () => (
	<div
		className='w-full py-10 flex flex-col'
		id='projects'
	>
		<Heading text='Projects' />
		<div className='flex flex-col justify-center flex-wrap mx-2'>
			{projects.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	</div>
);
