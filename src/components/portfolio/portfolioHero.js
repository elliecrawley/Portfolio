import React from "react"
import { thumbnailData, thumbnail_details } from "../thumbnailData";

const PortfolioHero = () => {
  thumbnailData()
  var title = document.title;

  const [desktopImageLoaded, setDesktopImageLoaded]=React.useState(false);
  const [mobileImageLoaded, setMobileImageLoaded]=React.useState(false);

    return (   
        <>
        {thumbnail_details.filter(val => val.Project === title)
                  .map(({id, desktopSrc, mobileSrc, alt, Project}) => {
                    return <section key={id} className="portfolio__hero-container">
                    
                    <img 
                    className={`portfolio__hero-img-desktop preimage-${desktopImageLoaded ? 'loaded' :  'loading'}`} 
                    src={desktopSrc} 
                    alt={alt}
                    onLoad={()=> setDesktopImageLoaded(true)}/>

                    <img 
                    className={`portfolio__hero-img-mobile preimage-${ mobileImageLoaded ? 'loaded' :  'loading'}`}  
                    src={mobileSrc} 
                    alt={alt}
                    onLoad={()=> setMobileImageLoaded(true)}/>

                    <h1 className="portfolio__hero-txt">{Project}</h1> 
                </section>
                  })}                      
       </>  
    )
}

export default PortfolioHero
