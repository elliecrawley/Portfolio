import React, { Suspense } from 'react';
const HeroText  = React.lazy(() => import("./heroText"));
const HeroImage  = React.lazy(() => import("./heroImage"));
const Button  = React.lazy(() => import("../button"));
const SideBar = React.lazy(() => import("./sideBar"));


const HeroSection = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <SideBar/> 
          <HeroImage/>
          <HeroText/>         
          <Button link="/#Portfolio" ctaLink="hero-cta" wrapper_outer='hero-cta-wrapper' wrapper_inner='btn-inner-wrapper' href="https://github.com/elliecrawley" text='View Work' git_link="hidden"/>
        </Suspense>
        </>
    )
}

export default HeroSection
