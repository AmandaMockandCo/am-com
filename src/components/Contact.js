import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <h1>Contact</h1>
            </div>
            <div className='contact-information'>
                <div className='contact-form-container'>
                    <ContactForm />
                </div>
                <div className='socials-cta-container'>
                    <h3>Social Information Here</h3>
                </div>
            </div>
        </div>

    )
}

export default Contact;
