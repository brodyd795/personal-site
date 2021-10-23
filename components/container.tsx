import React from 'react';
import Head from 'next/head';
import {Header} from './header';
import {Footer} from './footer';

interface IProps {
	children: React.ReactNode;
	headerText: string;
	subHeaderText: string;
}

export const Container = ({children, headerText, subHeaderText}: IProps) => (
	<div className='flex flex-col flex-1 items-center'>
		<Head>
			<title>Brody Dingel</title>
		</Head>
		<Header headerText={headerText} subHeaderText={subHeaderText} />
		<div className='flex-1 w-full'>{children}</div>
		<Footer />
	</div>
);
