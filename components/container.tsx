import React from 'react';
import Head from 'next/head';
import {Header} from './header';
import {Footer} from './footer';

interface IProps {
	children: React.ReactNode;
	headerText: string;
	subHeaderText: string[];
}

export const Container = ({
	children,
	headerText,
	subHeaderText
}: IProps): JSX.Element => (
	<div className='flex flex-col items-center bg-neutral-900 text-white min-h-screen'>
		<div className={'max-w-screen-md'}>
			<Head>
				<title>Brody Dingel</title>
			</Head>
			<Header headerText={headerText} subHeaderText={subHeaderText} />
			<div className='w-full'>{children}</div>
			<Footer />
		</div>
	</div>
);
