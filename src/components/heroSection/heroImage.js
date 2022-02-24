import React from "react"
import PortPic from "../../assets/images/PortPicDesktop.webp"
import PortPicLQ from "../../assets/images/PortPicDesktopLQ.webp"

const HeroImage = () => {

    const [desktopPreload, setDesktopPreload]=React.useState("");
    const [desktopImageLoaded, setDesktopImageLoaded]=React.useState(false);

    return (
        <> 

            <div 
            className="hero-img hero-img-mobile" 
            alt="Ellie Crawley" 
            />

            <img 
            className={`hero-img hero-img-desktop LQ-img ${desktopPreload} preimage-${desktopImageLoaded ? 'loaded' :  'loading'}`}
            src={PortPicLQ} 
            alt="Ellie Crawley"
            onLoad={()=> setDesktopImageLoaded(true)}/>

            <img 
            className="hero-img hero-img-desktop"
            src={PortPic} 
            alt="Ellie Crawley" 
            onLoad={()=> setDesktopPreload("image-loaded")}/>
        </>
    )
}

export default HeroImage
