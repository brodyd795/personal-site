import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import backgroundImage from '../public/background.jpg';

interface IHeaderProps {
	headerText: string;
	subHeaderText: string[];
}

const linkStyles =
	'p-2 transition duration-500 ease-in-out hover:border-zinc-700 border-transparent border-b-2 hover:border-current';

export const Header: FC<IHeaderProps> = ({
	headerText,
	subHeaderText
}: IHeaderProps) => (
	<header className='h-screen w-full text-white flex justify-center'>
		<div className='h-100 w-100 overflow-hidden z-0'>
			<Image src={backgroundImage} priority layout='fill' placeholder='blur' />
		</div>
		<div className='h-100 w-full flex flex-col z-10 items-center'>
			<nav className='p-2 flex w-full justify-end'>
				<Link href='/'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={`${linkStyles} mr-auto`}>Home</a>
				</Link>
				<Link href='/about'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={linkStyles}>About</a>
				</Link>
				<Link href='#contact'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={linkStyles}>Contact</a>
				</Link>
			</nav>
			<div className='flex-1 flex flex-col justify-center'>
				<h1 className='text-center text-8xl'>{headerText}</h1>
				{subHeaderText.map((text) => (
					<span
						key={text}
						className='text-center block first-of-type:mt-16 text-3xl'
					>
						{text}
					</span>
				))}
			</div>
			<button type={'button'} className={'bg-green-500 mb-80 p-4 animate-bounce'}>Get to know me <FontAwesomeIcon icon={faAngleDown} className='pl-1' /></button>
		</div>
	</header>
);
