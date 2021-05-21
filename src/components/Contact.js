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
                            <div onClick={()=> window.open("https://www.tiktok.com/@amandarmock", "_blank")} className="tiktok social-icons-wrapper">
                                <div className='icon'>
                                    <i class="fab fa-tiktok"></i> 
                                </div>
                                <span>TikTok</span>
                                </div>
                                <div onClick={()=> window.open("https://twitter.com/amandarmock", "_blank")} className="twitter social-icons-wrapper">
                                    <div className='icon'>
                                    <i class="fab fa-twitter"></i>
                                    </div> 
                                    <span>Twitter</span>
                                </div>
                                <div onClick={()=> window.open("https://www.linkedin.com/in/amandarmock/", "_blank")}className="linkedin social-icons-wrapper">
                                    <div className='icon'>
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <span>LinkedIn</span>
                                </div>
                                <div onClick={()=> window.open("https://www.instagram.com/amandarmock/", "_blank")} className="instagram social-icons-wrapper">
                                    <div className='icon'>
                                    <i class="fab fa-instagram"></i>
                                </div> 
                                <span>Instagram</span>
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
