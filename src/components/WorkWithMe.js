import React from 'react'
import './WorkWithMe.css'

function WorkWithMe() {
    return (
        <div className='work-with-me-container'>
            <div className='work-with-me-hold-contents'>
            <div className='work-with-me-header'>
                <h2>Work With Me</h2>
                <h3>I work with online companies and digital teams to build and scale through their operations.</h3>
                <h3>Weather your struggling to get deliverables done on time or you want to
                    prepare yor company or team for growth, your operations will always be at the heart of it.</h3>
                <h3>Learn more about how I can help below.</h3>
            </div>
            <div className='workwithme-options'>
                <div className='workwithme-left'>
                    <div className='workwithmecard'>
                        <h3>Free Advice on YouTube</h3>
                        <p>(Image here)</p>
                        <p>Ditching the hype and half truths many "gurus" try and sell, my YouTube channel is a place
                            where you can get guidance on how to start an online business, combined with 
                            insights to help you grow. 
                        </p>
                        <p>[Check It Out Now]</p>
                    </div>
                </div>
                
                <div className='workwithme-right'>
                    <div className='workwithmecard'>
                        <h3>Private Consulting & Support</h3>
                        <p>(Image here)</p>
                        <p>No two teams or companies are the same, which is why 
                            I tailor my offerings to each client. Wheather you just need
                            a little guidance, or someone to hold your hand through the process, I can help. 
                             </p>

                        <p>[Learn More]</p>
                    </div>
                </div>
            </div>
        </div>
           <div className='work-with-me-divider'>
                
        </div>
        </div>
    )
}

export default WorkWithMe;
