import React from 'react';
import Head from 'next/head';
import { Header } from './header';

interface IProps {
    children: React.ReactNode;
}

export const Container = ({children}: IProps) => (
    <div>
        <Head>
            <title>{'Brody Dingel'}</title>
        </Head>
        <Header />
        {children}
    </div>
);
