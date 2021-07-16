import React, {FC} from 'react';
import {createGlobalStyle} from 'styled-components';

interface IProps {
    Component: FC;
}

const GlobalStyle = createGlobalStyle`
  body {
    color: grey;
    margin: 0;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const MyApp = ({Component}: IProps) => (
    <>
        <Component />
        <GlobalStyle />
    </>
);

export default MyApp;
