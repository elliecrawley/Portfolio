import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilitiesSecondary = React.lazy(() => import("../portfolio/portfolioResponsibilitiesSecondary"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));

const SmallerProjects = () => {

    document.title = "Smaller Projects";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
      
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <PortfolioHero/>
            <PortfolioAbout text="I have assisted on several Shopify stores with work such as uploading and updating products and collections, making minor styling edits, installing and configuring apps, and assisting with email marketing campaigns. Below are a selection of clients whose stores I have helped to update or maintain."/>
            <PortfolioResponsibilitiesSecondary title="Client Details"/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default SmallerProjects
