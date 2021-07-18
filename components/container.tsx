import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {Header} from './header';

const StyledContainer = styled.div`
	display: flex;
	flex: 1;
	flex-flow: column;
`;

interface IProps {
	children: React.ReactNode;
	headerText: string;
	subHeaderText: string;
}

export const Container = ({children, headerText, subHeaderText}: IProps) => (
	<StyledContainer>
		<Head>
			<title>Brody Dingel</title>
		</Head>
		<Header headerText={headerText} subHeaderText={subHeaderText} />
		{children}
	</StyledContainer>
);
