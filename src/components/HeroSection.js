import React from 'react';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';
import AmandaMock from '../images/AmandaMock.jpg'
function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>I'm Amanda Mock</h1>
            <img src={AmandaMock} alt="Amanda Mock" width='500px' class="profileimage"/> 
            <h1>
            <Typewriter
                options={{
                    loop: true,
                    deleteSpeed:25,
                    delay:75,
                  }}
                onInit={(typewriter) => {
                    typewriter.typeString('I help businesses & teams improve performance.')
                    .pauseFor(2500)
                    .deleteChars(21)
                    typewriter.typeString(' grow sustainably.')
                    .pauseFor(2500)
                    .deleteChars(18)
                    typewriter.typeString(' feel more fulfilled.')
                    .pauseFor(2500)
                    .deleteChars(21)
                    typewriter.typeString(' help more people.')    
                    .pauseFor(2500)  
                    .deleteAll()
                    .start();
                }}
            />
            </h1>
        </div>
    )
}

export default HeroSection;
