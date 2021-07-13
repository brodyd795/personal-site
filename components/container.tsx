import React from 'react';
import Head from 'next/head';

interface IProps {
    children: React.ReactNode;
}

export const Container = ({children}: IProps) => (
    <div>
        <Head>
            <title>{'Brody Dingel'}</title>
        </Head>
        {children}
    </div>
);
