import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const Yolly = () => {
    document.title = "Yolly";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
  return (
    <>
    <PortfolioHero/>
    <PortfolioAbout text="An independent florist based in London. I helped to upload new products and create product collections, edit product descriptions, update delivery information, and create newsletters using MailChimp. This store was built using the 'Debut' theme."/>
    <PortfolioResponsibilities title="Responsibilities"/>
    <Button link="https://yolly.co.uk" ctaLink="portfolio-cta" wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" text='View Live Site' git_link="hidden"/>
    <ViewMore/>
    </>
  )
}

export default Yolly