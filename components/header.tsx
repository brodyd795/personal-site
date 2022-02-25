import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
	<header className='w-full flex justify-center text-black'>
		<div className='w-full flex flex-col items-center'>
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
			<div className='flex flex-col-reverse sm:flex-row mt-8 w-full ml-4 sm:justify-between'>
				<div>
					<h1 className='text-3xl sm:text-5xl font-bold'>{headerText}</h1>
					{subHeaderText.map((text) => (
						<span
							key={text}
							className='block first-of-type:mt-4 text-xl'
						>
							{text}
						</span>
					))}
				</div>
				<div className="h-20 w-20 relative mb-8 sm:mb-0 mr-4">
					<Image
						alt="Brody Dingel"
						// height={176}
						// width={176}
						layout={'fill'}
						src="/avatar.jpg"
						className="rounded-full filter"
					/>
				</div>
			</div>
		</div>
	</header>
);
