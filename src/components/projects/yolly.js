import React, { Suspense } from 'react';

const PortfolioHero = React.lazy(() => import("../portfolio/portfolioHero"));
const PortfolioAbout = React.lazy(() => import("../portfolio/portfolioAbout"));
const PortfolioResponsibilities = React.lazy(() => import("../portfolio/portfolioResponsibilities"));
const ViewMore = React.lazy(() => import("../portfolio/viewMore"));
const Button = React.lazy(() => import("../button"));

const Yolly = () => {
    document.title = "Yolly";
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

  return (
    <>
    <Suspense fallback={<div></div>}>
      <PortfolioHero/>
      <PortfolioAbout text="An independent florist based in London. I helped to upload new products and create product collections, edit product descriptions, update delivery information, and create newsletters using MailChimp. This store was built using the 'Debut' theme."/>
      <PortfolioResponsibilities title="Responsibilities"/>
      <Button 
      link="https://yolly.co.uk" 
      ctaLink="portfolio-cta" 
      wrapper_outer='portfolio-cta__outer-wrapper' 
      wrapper_inner='portfolio-cta__inner-wrapper' 
      wrapper_inner_inner="portfolio-cta__inner-inner" 
      text='View Live Site'/>
      <ViewMore/>
    </Suspense>
    </>
  )
}

export default Yolly