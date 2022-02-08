import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const Project7 = () => {
    document.title = "Avery Row";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="This Shopify store was created for Avery Row, an independent British brand specialising in organic, natural textiles and accessories for children. My main roles in this project were to improve GDPR compliance and to support the client to develop email templates using the email marketting platform 'Klaviyo'. This store was built using the 'Prestige' theme."/>
            <PortfolioResponsibilities/>
            <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" btn_class='portfolio-cta' text='View Live Site'/>
            <ViewMore/>
        </>
    )
}

export default Project7
