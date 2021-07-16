import React from 'react';

import {Container} from '../components/container';

const About = () => (
    <Container
        headerText={'About'}
        subHeaderText={'some subHeader text...'}
    >
        <main>
            <div>{'All about me!'}</div>
        </main>
    </Container>
);

export default About;
