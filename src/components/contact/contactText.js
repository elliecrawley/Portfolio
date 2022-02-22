import React, { Suspense } from 'react';

const SectionTitle  = React.lazy(() => import( "../sectionTitle"));

const ContactText = () => {
    return (
        <div className="contact-text">
            <Suspense fallback={<div>Loading...</div>}>
                <SectionTitle text="Contact"/>
            </Suspense>
            <p>Ready to tell your story? Call me on <a className="tel" aria-label="mobile number" href="tel:07956542404">07956542404</a>, or send me a message using the form below.</p>
        </div>
    )
}

export default ContactText
