import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='hold-that-style'>
                <div className='contact-add-some-style'></div>
            </div>
            <div className='contact-hold-contents'>
            <div className='contact-header'>
                <h2>Contact</h2>
                <h3>Have a question or just want to say 'Hi'?</h3>
                <h3>Send me an email using the form below, or connect with me somewhere on social.</h3>
            </div>
            <div className='contact-information'>
                <div className='contact-form-container'>
                    <ContactForm />
                </div>
                <div className='socials-cta-container socialmiddle'>
                    <div className='social-content'>
                        <div className='social-text'>
                        <h3>Find Me Online</h3></div>
                        <div className='social-icon-container'>
                            <div className="tiktok social-icons">
                                (T) TikTok
                            </div>
                            <div className="twitter social-icons">
                                (T) Twitter
                            </div>
                            <div className="linkedin social-icons">
                                (L) LinkedIn
                            </div>
                            <div className="instagram social-icons">
                                (I) Instagram
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;
