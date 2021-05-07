import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';
import Approach from '../Approach';
import Projects from '../Projects';
import Contact from '../Contact';
import WorkWithMe from '../WorkWithMe';
import Footer from '../Footer';
import '../Home.css';

function Home () {
    return (
        <>
            <HeroSection />
            <About />
            <Approach />
            <Projects />
            <WorkWithMe />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;