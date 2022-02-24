import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const Button = React.lazy(() => import("../button"));

const EmilyCarter = () => {
    document.title = "Emily Carter";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
        <Suspense fallback={<div></div>}>
            <PortfolioHero/>
        </Suspense>
        <Suspense fallback={<div></div>}>
            <PortfolioAbout text="Emily Carter is an award-winning British designer based in London, specialising in hand illustrated silk accessories, stationery, and furnishings. She needed to migrate her existing online store to Shopify, which included updating elements of her site design. As an artist, her site needed to support a large number of high resolution images whilst still maintaining fast loading speeds. This site was built using the 'Debut' theme."/>  
            <PortfolioResponsibilities title="Responsibilities"/>
            <Button 
            link="https://emily-carter.com" 
            wrapper_outer='portfolio-cta__outer-wrapper' 
            wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" 
            ctaLink="portfolio-cta"
            text="View Live Site"/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default EmilyCarter
