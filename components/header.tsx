import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IHeaderProps {
	headerText: string;
	subHeaderText: string[];
}

const linkStyles =
	'p-2 transition duration-300 ease-in-out hover:border-zinc-700 border-transparent border-b-2 hover:border-current';

export const Header: FC<IHeaderProps> = ({
	headerText,
	subHeaderText
}: IHeaderProps) => (
	<header className='w-full flex justify-center'>
		<div className='w-full flex flex-col items-center'>
			<nav className='p-2 flex w-full justify-end'>
				<Link href='/'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={`${linkStyles} mr-auto`}>Home</a>
				</Link>
				<Link href='/resume.pdf'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={linkStyles}>Resume</a>
				</Link>
				<Link href='#contact'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={linkStyles}>Contact</a>
				</Link>
			</nav>
			<div className='flex flex-col-reverse sm:flex-row mt-8 ml-4 sm:justify-between'>
				<div className={'flex flex-col justify-center'}>
					<h1 className='text-3xl sm:text-5xl font-bold'>{headerText}</h1>
					{subHeaderText.map((text) => (
						<h2 key={text} className='block first-of-type:mt-4 text-xl'>
							{text}
						</h2>
					))}
				</div>
				<div className='h-20 w-20 sm:h-28 sm:w-28 mb-4 sm:mb-0 mr-4'>
					<Image
						alt='Brody Dingel'
						layout='responsive'
						width={100}
						height={100}
						src='/avatar.jpg'
						className='rounded-full'
					/>
				</div>
			</div>
		</div>
	</header>
);
