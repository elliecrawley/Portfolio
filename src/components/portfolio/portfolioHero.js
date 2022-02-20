import { thumbnailData, thumbnail_details } from "../thumbnailData";

const PortfolioHero = () => {
  thumbnailData()
  var title = document.title;

    return (   
        <>
        {thumbnail_details.filter(val => val.Project === title)
                  .map(({id, desktopSrc, src, alt, Project}) => {
                    return <section key={id} className="portfolio__hero-container">
                    <img className="portfolio__hero-img-desktop" src={desktopSrc} alt={alt}/>
                    <img className="portfolio__hero-img-mobile" src={src} alt={alt}/>
                    <h1 className="portfolio__hero-txt">{Project}</h1> 
                </section>
                  })}                      
       </>  
    )
}

export default PortfolioHero
