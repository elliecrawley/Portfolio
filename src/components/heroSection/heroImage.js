import React from "react"
import PortPic from "../../assets/images/PortPic-min.webp"
import PortPicLQ from "../../assets/images/PortPicMobileLQ.webp"


const HeroImage = () => {

    const [preload, setPreload]=React.useState("");
    const [imageLoaded, setImageLoaded]=React.useState(false);


    return (
        <> 
            <div 
            className={`hero-img hero-img-mobile-LQ LQ-img ${preload} preimage-${imageLoaded ? 'loaded' :  'loading'}`} 
            alt="Ellie Crawley" 
            onLoad={()=> setImageLoaded(true)}/>

            <div 
            className="hero-img hero-img-mobile" 
            alt="Ellie Crawley" 
            onLoad={()=> setPreload("image-loaded")}/>

            <img 
            className={`hero-img hero-img-desktop LQ-img ${preload} preimage-${imageLoaded ? 'loaded' :  'loading'}`}
            src={PortPicLQ} 
            alt="Ellie Crawley"
            onLoad={()=> setImageLoaded(true)}/>

            <img 
            className="hero-img hero-img-desktop"
            src={PortPic} 
            alt="Ellie Crawley" 
            onLoad={()=> setPreload("image-loaded")}/>
        </>
    )
}

export default HeroImage
