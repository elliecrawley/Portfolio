import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const Button = React.lazy(() => import("../button"));

const KOKO = () => {
    document.title = "KOKO";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
        <Suspense fallback={<div></div>}>
            <PortfolioHero/>
        </Suspense>
        <Suspense fallback={<div></div>}>
            <PortfolioAbout text="This Shopify store was created for KOKO, an exclusive eco-friendly 100% organic apparel brand with designs influenced by artists and musicians. Working with the lead designer and developer for this project I helped to design and create key information pages as well as generating content. This store was built using the 'Debut' theme."/>
            <PortfolioResponsibilities title="Responsibilities"/>
            <Button 
                link="https://koko-culture.com/" 
                wrapper_outer='portfolio-cta__outer-wrapper' 
                wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" 
                ctaLink="portfolio-cta"
                text="View Live Site"/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default KOKO
