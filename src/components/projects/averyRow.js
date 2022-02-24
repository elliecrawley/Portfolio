import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const Button = React.lazy(() => import("../button"));

const AveryRow = () => {
    document.title = "Avery Row";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    return (
        <>
        <Suspense fallback={<div></div>}>
            <PortfolioHero/>
        </Suspense>
        <Suspense fallback={<div></div>}>
            <PortfolioAbout text="This Shopify store was created for Avery Row, an independent British brand specialising in organic textiles and accessories for children. My main roles in this project were to improve GDPR compliance and to support the client to develop email templates using the email marketting platform 'Klaviyo'. This store was built using the 'Prestige' theme."/>
            <PortfolioResponsibilities title="Responsibilities"/>
            <Button 
            link="https://www.avery-row.com/" 
            ctaLink="portfolio-cta" 
            wrapper_outer='portfolio-cta__outer-wrapper' 
            wrapper_inner='portfolio-cta__inner-wrapper' wrapper_inner_inner="portfolio-cta__inner-inner" 
            text='View Live Site'/>
            <ViewMore/>
        </Suspense>
        </>
    )
}

export default AveryRow
