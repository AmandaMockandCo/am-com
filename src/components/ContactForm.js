import React from 'react'
import { useEffect } from 'react';


function ContactForm (props) {

    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://crm.amandamock.com/f/embed.php?id=44";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);

    return (
        <div>
            <div class="_form_44"></div><script src="https://crm.amandamock.com/f/embed.php?id=44" type="text/javascript" charset="utf-8"></script>
        </div>
    );
}

export default ContactForm;
