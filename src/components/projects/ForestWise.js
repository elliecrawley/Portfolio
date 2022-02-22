import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const Button = React.lazy(() => import("../button"));

const ForestWise = () => {
    document.title = "ForestWise";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <PortfolioHero/>
            <PortfolioAbout/>
            <PortfolioResponsibilities/>
            <Button 
            wrapper_outer='portfolio-cta__outer-wrapper' 
            wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" 
            btn_class='portfolio-cta' 
            text='View Live Site'/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default ForestWise
