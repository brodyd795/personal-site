import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {Header} from './header';

const StyledContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
`;

const StyledChildrenContainer = styled.div`
	max-width: 1024px;
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
		<StyledChildrenContainer>{children}</StyledChildrenContainer>
	</StyledContainer>
);
