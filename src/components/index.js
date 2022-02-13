import HeroSection from "./heroSection/heroSection";
import AboutText from "./aboutText";
import PortfolioHeading from "./portfolioIndexSection/portfolioHeading";
import Lightbulb from "./portfolioIndexSection/lightbulb";
import ContactText from "./contact/contactText";
import ContactForm from "./contact/contactForm";

const Index = () => {
  return <>
        <section className="hero">  
          <HeroSection/>  
        </section>
        <section className="about" id="AboutText">
          <AboutText/>
        </section>
        <section className="portfolio" id="Portfolio">
          <PortfolioHeading/>
        </section>
        <section className="contact" id="Contact">
          <Lightbulb/>
          <ContactText/>
          <ContactForm/>
        </section>
  </>;
};

export default Index;
