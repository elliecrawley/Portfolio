import PortfolioHero from "../portfolio/portfolioHero";
import PortfolioAbout from "../portfolio/portfolioAbout";
import PortfolioResponsibilities from "../portfolio/portfolioResponsibilities";
import ViewMore from "../portfolio/viewMore";
import Button from "../button";
import React from "react";

const EmilyCarter = () => {
    document.title = "Emily Carter";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
            <PortfolioHero/>
            <PortfolioAbout text="Emily Carter is an award-winning British designer based in London, specialising in hand illustrated silk accessories, stationery and furnishings. She needed to migrate her existing online store to Shopify, which included updating elements of her site design. As an artist, her site needed to support a large number of high resolution images whilst still maintaining fast loading speeds. This site was built using the 'Debut' theme."/>
            <PortfolioResponsibilities title="Responsibilities"/>
            <a href="https://emily-carter.co.uk/" target="_blank" rel="noreferrer">
                <Button wrapper_outer='portfolio-cta__outer-wrapper' wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" btn_class='portfolio-cta' text='View Live Site'/>
            </a>
            <ViewMore/>
        </>
    )
}

export default EmilyCarter
