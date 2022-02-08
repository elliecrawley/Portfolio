import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const Project1 = () => {
    document.title = "Website Accessibility Tool";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="A selection of tools to improve the accessibility of written web content for people with visual impairments and dyslexia. This tool is still in the early stages of development and has not yet been tested on dynamic content but in the future I hope to develop it into a Shopify app."/>
            <PortfolioResponsibilities/>
            <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' btn_class='portfolio-cta' text='View Live Site'/>
            <ViewMore/>
        </>
    )
}

export default Project1
