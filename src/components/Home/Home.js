import React from 'react';
import About from './AboutMe/About';
import Blog from './Blog/Blog';
import Services from './Services/Services';

const Home = () => {
    return (
        <main style={{ paddingTop: 60 }}>
            <About />
            <Services />
            <Blog />
        </main>
    );
}

export default Home;
