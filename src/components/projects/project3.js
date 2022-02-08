import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const Project3 = () => {
    document.title = "WineSpark";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="This Shopify store was created for WineSpark, a UK based wine subscription service. As a members only subscription service this project required a signifiant amount of work with the BOLD suite of apps to create alternative homepages and complex pricing rules. Working alongside the lead developer and designer I helped to create responsive and scalable content throughout the site by creating dynamic blocks and page templates. This store was built using the 'Prestige' theme."/>
            <PortfolioResponsibilities/>
            <a href="https://winespark.com" target="_blank" rel="noreferrer">
                <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' btn_class='portfolio-cta' text='View Live Site'/>
            </a>
            <ViewMore/>
        </>
    )
}

export default Project3
