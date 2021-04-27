import React from 'react';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';
function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='lefthero'>
                
            </div>
            
            <div className='righthero'>
                <div className='tothemiddle'>
                <div className='rightheocontent'>
                    <h1>I'm Amanda Mock</h1>

                    <div className='typewritercontainer'>
                    <p><Typewriter
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
                    </p>
                    </div>
                    <p>For over a decade I've worked with digital companies & 
                        teams to imrpove performance, learn new tools, and 
                        scale with fewer headaches.</p>
                    <p><a href="/">Learn about my approach →</a></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
