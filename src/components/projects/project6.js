import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import React from "react";

const Project6 = () => {

    document.title = "Smaller Projects";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
      
    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="I have assisted on several Shopify stores with work such as uploading and updating products and collections, making minor styling edits, installing and configuring apps, and assisting with email marketing campaigns. Below are a selection of clients whose stores I have helped to update or maintain."/>
            <PortfolioResponsibilities/>
            <ViewMore/>
        </>
    )
}

export default Project6
