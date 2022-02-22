import React, { Suspense } from 'react';

const SectionTitle  = React.lazy(() => import( "../sectionTitle"));

const PortfolioAbout = ({text}) => {
    return (
        <section className="Porfolio__about-container">
            <div className="Porfolio__about-inner-div">
                <Suspense fallback={<div>Loading...</div>}>
                    <SectionTitle text="About the project"/>
                </Suspense>
                <p className="about_body">{text}</p>
            </div>
        </section>
    )
}

export default PortfolioAbout
