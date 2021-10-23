import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IHeaderProps {
	headerText: string;
	subHeaderText: string;
}

const linkStyles: string =
	'p-2 transition duration-500 ease-in-out hover:border-gray-700 border-transparent border-b-2 hover:border-current';

export const Header: FC<IHeaderProps> = ({
	headerText,
	subHeaderText
}: IHeaderProps) => (
	<header className='h-screen w-full text-white flex justify-center'>
		<div className='h-100 w-100 overflow-hidden z-0'>
			<Image src='/background.jpg' priority layout='fill' />
		</div>
		<div className='h-100 w-full flex flex-col z-10'>
			<nav className='p-2 flex justify-end'>
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
			<div className='flex-1 flex flex-col justify-center mb-80'>
				<h1 className='text-center text-8xl'>{headerText}</h1>
				<span className='text-center block m-8 text-xl'>{subHeaderText}</span>
			</div>
		</div>
	</header>
);
