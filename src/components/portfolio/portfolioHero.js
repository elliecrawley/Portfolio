import React from "react"
import { thumbnailData, thumbnail_details } from "../thumbnailData";

const PortfolioHero = () => {
  thumbnailData()
  var title = document.title;

  const [desktopPreload, setDesktopPreload]=React.useState("");
  const [desktopImageLoaded, setDesktopImageLoaded]=React.useState(false);
  const [mobilePreload, setMobilePreload]=React.useState("");
  const [mobileImageLoaded, setMobileImageLoaded]=React.useState(false);

    return (   
        <>
        {thumbnail_details.filter(val => val.Project === title)
                  .map(({id, desktopSrc, LQDesktopSrc, mobileSrc, LQMobileSrc, alt, Project}) => {
                    return <section key={id} className="portfolio__hero-container">
                    
                    <img 
                    className={`portfolio__hero-img-desktop LQ-img ${desktopPreload} preimage-${desktopImageLoaded ? 'loaded' :  'loading'}`} 
                    src={LQDesktopSrc} 
                    alt={alt}
                    onLoad={()=> setDesktopImageLoaded(true)}/>

                    <img 
                    className="portfolio__hero-img-desktop" 
                    src={desktopSrc} 
                    alt={alt}
                    onLoad={()=> setDesktopPreload("image-loaded")}/>

                    <img 
                    className={`portfolio__hero-img-mobile LQ-img ${mobilePreload} preimage-${ mobileImageLoaded ? 'loaded' :  'loading'}`} 
                    src={LQMobileSrc} 
                    alt={alt}
                    onLoad={()=> setMobileImageLoaded(true)}/>

                    <img 
                    className="portfolio__hero-img-mobile " 
                    src={mobileSrc} 
                    alt={alt}
                    onLoad={()=> setMobilePreload("image-loaded")}/>

                    <h1 className="portfolio__hero-txt">{Project}</h1> 
                </section>
                  })}                      
       </>  
    )
}

export default PortfolioHero
