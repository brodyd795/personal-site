import React from 'react';
import Head from 'next/head';
import {Header} from './header';

interface IProps {
    children: React.ReactNode;
    headerText: string;
    subHeaderText: string;
}

export const Container = ({children, headerText, subHeaderText}: IProps) => (
    <div>
        <Head>
            <title>Brody Dingel</title>
        </Head>
        <Header headerText={headerText} subHeaderText={subHeaderText} />
        {children}
    </div>
);
