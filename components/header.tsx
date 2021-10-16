import React, {FC} from 'react';

import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.div`
	background-color: #272e41;
	color: white;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const StyledTopBar = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 8px;
`;

const StyledHero = styled.div``;

const StyledLink = styled.a`
	text-decoration: none;
	padding: 16px;
	border-bottom: 2px solid transparent;
	transition: border 0.2s ease;
	color: white;

	:visited {
		color: white;
	}

	:hover {
		cursor: pointer;
		border-bottom: 2px solid white;
	}
`;

const StyledHomeLink = styled(StyledLink)`
	margin-right: auto;
`;

const StyledH1 = styled.h1`
	font-size: 40px;
	text-align: center;
`;

const StyledDescription = styled.p`
	text-align: center;
	padding: 16px 32px 32px;
`;

const StyledHeaderInnerContainer = styled.div`
	max-width: 1024px;
	width: 100%;
`;

interface IHeaderProps {
	headerText: string;
	subHeaderText: string;
}

export const Header: FC<IHeaderProps> = ({
	headerText,
	subHeaderText
}: IHeaderProps) => (
	<StyledHeader>
		<StyledHeaderInnerContainer>
			<StyledTopBar>
				<Link passHref href='/'>
					<StyledHomeLink>Home</StyledHomeLink>
				</Link>
				<Link passHref href='/about'>
					<StyledLink>About</StyledLink>
				</Link>
				<Link passHref href='#contact'>
					<StyledLink>Contact</StyledLink>
				</Link>
			</StyledTopBar>
			<StyledHero>
				<StyledH1>{headerText}</StyledH1>
				<StyledDescription>{subHeaderText}</StyledDescription>
			</StyledHero>
		</StyledHeaderInnerContainer>
	</StyledHeader>
);
