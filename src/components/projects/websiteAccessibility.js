import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const ButtonWithGit = React.lazy(() => import("../buttonWithGit"));

const WebsiteAccessibility = () => {
    document.title = "Accessibility Tool";

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
        <Suspense fallback={<div></div>}>
            <PortfolioHero/>
            <PortfolioAbout text="A selection of tools to improve the accessibility of written web content for people with visual impairments and dyslexia. This tool is still in the early stages of development and has not yet been tested on dynamic content but in the future I hope to develop it into a Shopify app." />
            <PortfolioResponsibilities title="Key Features"/>
            <ButtonWithGit 
                link="https://accessibility-tool.netlify.app/"
                ctaLink="portfolio-cta" 
                wrapper_outer='portfolio-cta__outer-wrapper' 
                wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner"
                git_href="https://github.com/elliecrawley/Accessibility-tool" 
                git_btn='git-cta'/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default WebsiteAccessibility
