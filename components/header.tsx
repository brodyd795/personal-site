import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.div`
    background-color: darkgray;
`;

const StyledTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`;

const StyledHero = styled.div`
    border: 2px solid black;
`;

const StyledLink = styled.a`
    text-decoration: none;
    padding: 16px;

    :hover {
        cursor: pointer;
    }
`;

const StyledH1 = styled.h1`
    font-size: 40px;
    text-align: center;
`;

const StyledDescription = styled.p`
    text-align: center;
`;

export const Header = () => (
    <StyledHeader>
        <StyledTopBar>
            <Link href={'/'}>
                <StyledLink>{'Home'}</StyledLink>
            </Link>
            <Link href={'/about'}>
                <StyledLink>{'About'}</StyledLink>
            </Link>
        </StyledTopBar>
        <StyledHero>
            <StyledH1>{'Hi, I\'m Brody.'}</StyledH1>
            <StyledDescription>{'I\'m a full-stack software engineer.'}</StyledDescription>
        </StyledHero>
    </StyledHeader>
);
