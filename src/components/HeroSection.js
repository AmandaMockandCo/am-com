import React from 'react';
import './HeroSection.css';
import Typical from 'react-typical';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Amanda Mock</h1>
            <h1>I'm a{' '}

                <Typical 
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      'mother', 
                      500, 
                      'Bad ass',  
                      1000, 
                      'hard worker',
                      1000,   
                      'operations',
                      1000   
                    ]}
                />
            </h1>
        </div>
    )
}

export default HeroSection;
