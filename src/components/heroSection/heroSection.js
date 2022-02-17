import SideBar from "./sideBar";
import HeroText from "./heroText";
import HeroImage from "./heroImage";
import Button from "../button";

const HeroSection = () => {
    return (
        <>
          <SideBar/> 
          <HeroImage/>
          <HeroText/>         
          <Button link="/#Portfolio" ctaLink="hero-cta-link" wrapper_outer='hero-cta-wrapper' wrapper_inner='btn-inner-wrapper' btn_class='hero-cta' text='View Work' git_link="hidden"/>
        </>
    )
}

export default HeroSection
