import React, { Suspense } from 'react';
const SectionTitle = React.lazy(() => import("./sectionTitle"))

const AboutText = () => {
    return (
            <div className="about_inner_wrapper"> 
                <Suspense fallback={<div></div>}>
                    <SectionTitle text="About me"/>
                </Suspense>
                <p className="about_body">I'm a Bristol based freelance web developer specialising in Shopify. My goal is to take your ideas and transform them into beautiful responsive websites which are user focused and accessible.
                </p>
            </div>
    )
}

export default AboutText
