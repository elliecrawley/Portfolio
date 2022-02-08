import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const WebsiteAccessibility = () => {
    document.title = "Website Accessibility Tool";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="A selection of tools to improve the accessibility of written web content for people with visual impairments and dyslexia. This tool is still in the early stages of development and has not yet been tested on dynamic content but in the future I hope to develop it into a Shopify app."/>
            <PortfolioResponsibilities title="Key Features"/>
            <a href="https://github.com/elliecrawley" target="_blank" rel="noreferrer">
                <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" btn_class='portfolio-cta' text='View GitHub Repository'/>
            </a>
            <ViewMore/>
        </>
    )
}

export default WebsiteAccessibility
