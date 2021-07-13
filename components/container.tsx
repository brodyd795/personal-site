import Head from 'next/head';

export const Container = ({ children }) => (
    <div>
        <Head>
            <title>{'Brody Dingel'}</title>
        </Head>
        {children}
    </div>
);
