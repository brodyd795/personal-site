import React, {FC} from 'react';

import Link from 'next/link';

interface IHeaderProps {
	headerText: string;
	subHeaderText: string;
}

const linkStyles: string =
	'p-16 transition duration-500 ease-in-out hover:border-gray-700 border-transparent border-b-2 hover:border-current';

export const Header: FC<IHeaderProps> = ({
	headerText,
	subHeaderText
}: IHeaderProps) => (
	<header className='w-full text-white flex justify-center bg-gray-500'>
		<div className='w-full'>
			<nav className='p-8 flex justify-end'>
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
			<div>
				<h1 className='text-center text-6xl'>{headerText}</h1>
				<span className='text-center block m-8'>{subHeaderText}</span>
			</div>
		</div>
	</header>
);
