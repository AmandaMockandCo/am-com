import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='contact-container'>
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
                        <h3>Find Me Online</h3>
                        <h4>TikTok | LinkedIn | Instagram</h4>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;
