import React, {FC, useState, useRef} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {IProject, projects} from '../data/projects';
import {Heading} from './heading';
import {ShowMoreLessButton} from './buttons';
import {Collapse} from './collapse';

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
			<div className='flex flex-col rounded-lg my-2 px-2 py-3 transition ease-in-out delay-50 hover:scale-[1.01] duration-200 bg-blue-transparent-900 ring-2 ring-zinc-500'>
				<div className={'flex justify-center relative'}>
					<h4 className='text-center font-bold text-xl mt-2'>{name}</h4>
					<FontAwesomeIcon
						icon={faGithub}
						className='absolute w-6 h-6 top-3 right-0'
					/>
				</div>
				<div className='flex items-end'>
					<div className='flex flex-col flex-1 pl-4'>
						<span className='mt-8 mb-auto text-gray-400'>{tldr}</span>
						<div className='mt-4 mb-auto'>
							<span className='font-bold block'>{'What I learned: '}</span>
							<span
								className={`${lineClampStyles} sm:line-clamp-none text-gray-400`}
							>
								{description}
							</span>
							{!showMore && (
								<button
									className={'sm:hidden'}
									type={'button'}
									onClick={(e) => {
										e.preventDefault();
										setShowMore(true);
									}}
								>
									See all
								</button>
							)}
						</div>
						{technologies ? (
							<div className={'mt-4'}>
								<span className='font-bold block'>{'Technologies:'}</span>
								<span className={'text-gray-400'}>
									{technologies.join(', ')}
								</span>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</a>
	);
};

export const Projects: FC = () => {
	const [showMore, setShowMore] = useState(false);
	const scrollToRef = useRef<HTMLDivElement>(null);

	const firstProjects = projects.slice(0, 3);
	const lastProjects = projects.slice(3);

	return (
		<div className='w-full py-10 flex flex-col' id='projects' ref={scrollToRef}>
			<Heading text='Projects' />
			<div className='flex flex-col justify-center flex-wrap mx-2'>
				{firstProjects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
				<Collapse showMore={showMore} scrollToRef={scrollToRef}>
					{lastProjects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</Collapse>
				<ShowMoreLessButton
					showMore={showMore}
					setShowMore={setShowMore}
					type={'projects'}
				/>
			</div>
		</div>
	);
};
