import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const Project5 = () => {
    document.title = "ForestWise";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout/>
            <PortfolioResponsibilities/>
            <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' btn_class='portfolio-cta' text='View Live Site'/>
            <ViewMore/>
        </>
    )
}

export default Project5
