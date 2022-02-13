import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const CulturedBiomecare = () => {
    document.title = "Cultured Biomecare";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="This Shopify store was created for Cultured Biomecare, an award-winning UK based skin care brand. In order to showcase the rich scientific, ethical, and environmental influences behind the product line this site required a large volume of information pages and text based components. Working alongside the lead developer and designer I helped to create these key pages to maximise the readability of this text rich design. This store was created using the 'Debut' theme."/>
            <PortfolioResponsibilities title="Responsibilities"/>
            <Button link="https://culturedbiomecare.com" ctaLink="portfolio-link" wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" btn_class='portfolio-cta' text='View Live Site'/>
            <ViewMore/>
        </>
    )
}

export default CulturedBiomecare
