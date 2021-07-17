import React from 'react';

import {Container} from '../components/container';

const headerText = 'Hi, I\'m Brody.';
const subHeaderText = 'I\'m a full-stack software engineer. I currently work as a Software Engineer at Hy-Vee on the Browse/Shop team. Nice to meet you!';

const Home = () => (
    <Container headerText={headerText} subHeaderText={subHeaderText}>
        <main>
            <div>Content goes here</div>
        </main>
    </Container>
);

export default Home;
