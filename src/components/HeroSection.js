import React from 'react';
import './HeroSection.css';
import Typewriter from 'typewriter-effect'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Amanda Mock</h1>
            <h1>
            <Typewriter
                options={{
                    loop: true,
                  }}
                onInit={(typewriter) => {
                    typewriter.typeString('I help businesses and teams')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    typewriter.typeString(' get more done.')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteChars(15)
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    typewriter.typeString(' feel more fulfilled.')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    
                    .start();
                }}
            />
            </h1>
        </div>
    )
}

export default HeroSection;
