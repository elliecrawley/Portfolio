import React, { Suspense } from 'react';

const HeroSection  = React.lazy(() => import( "./heroSection/heroSection"));
const AboutText  = React.lazy(() => import( "./aboutText"));
const PortfolioHeading  = React.lazy(() => import( "./portfolioIndexSection/portfolioHeading"));
const Lightbulb  = React.lazy(() => import( "./portfolioIndexSection/lightbulb"));
const ContactText  = React.lazy(() => import( "./contact/contactText"));
const ContactForm  = React.lazy(() => import( "./contact/contactForm"));

const Index = () => {

  document.title = "Ellie Crawley"
  return <>
        <section className="hero">
        <Suspense fallback={<div></div>}>
          <HeroSection/> 
        </Suspense> 
        </section>
        <section className="about" id="AboutText">
        <Suspense fallback={<div></div>}>
          <AboutText/>
        </Suspense>
        </section>
        <section className="portfolio" id="Portfolio">
        <Suspense fallback={<div></div>}>
          <PortfolioHeading/>
        </Suspense>
        </section>
        <section className="contact" id="Contact">
        <Suspense fallback={<div></div>}>
          <Lightbulb/>
          <ContactText/>
          <ContactForm/>
        </Suspense>
        </section>
  </>;
};

export default Index;
