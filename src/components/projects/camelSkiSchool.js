import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const CamelSkiSchool = () => {
    document.title = "Camel Ski School";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
  return (
    <>
            <PortfolioHero/>
            <PortfolioAbout text="Camel Ski School is the UK’s largest waterski centre. Their Shopify store allows them to sell branded merchandise in addition to their main booking site. I assisted the lead developer and designer on this project by uploading new products, editing images, and creating FAQ and Gallery pages. This store was built using the 'Dawn' theme."/>
            <PortfolioResponsibilities title="Responsibilities"/>
            <Button link="https://camelskischool.myshopify.com" ctaLink="portfolio-cta" wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" text='View Live Site' git_link="hidden"/>
            <ViewMore/>
        </>
  )
}

export default CamelSkiSchool