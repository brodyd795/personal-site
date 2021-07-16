import React from 'react';

import {Container} from '../components/container';

const Home = () => (
    <Container
        headerText={'Hi, I\'m Brody.'}
        subHeaderText={'I\'m a full-stack software engineer.'}
    >
        <main>
            <div>{'Content goes here'}</div>
        </main>
    </Container>
);

export default Home;
