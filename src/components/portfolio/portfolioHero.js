const PortfolioHero = () => {

    const HeroImages= [{id: 1, Project:"Website Accessibility Tool", desktopSrc:"../images/accessible-hero.png", mobileSrc:"../images/accessiblethumbnail.png", alt:"accessibility tool"},{id: 2, Project:"Emily Carter", desktopSrc:"../images/emilyCarter.png", mobileSrc:"../images/ECthumbnail.png", alt:"Emily Carter Homepage"},{id: 3, Project:"WineSpark", desktopSrc:"../images/WineSpark.jpg", mobileSrc:"../images/WineSparkthumbnail.jpg", alt:"WineSpark Homepage"},{id: 4, Project:"Cultured Biomecare", desktopSrc:"../images/Cultured2.png", mobileSrc:"../images/Culturedthumbnail.png", alt:"Cultured Biomecare Homepage"},{id: 5, Project:"ForestWise", desktopSrc:"../images/ForestWise.png", mobileSrc:"../images/ForestWisethumbnail.png", alt:"ForestWise Homepage"},{id: 6, Project:"Smaller Projects", desktopSrc:"../images/YollyHero.png", mobileSrc:"../images/YollyThumbnail.png", alt:"Yolly Homepage"},{id: 7, Project:"Avery Row", desktopSrc:"../images/AveryRow.png", mobileSrc:"../images/AveryRowThumbnail.png", alt:"Avery Row Homepage"}];

    var title = document.title;

    return (   
        <>
        {HeroImages.filter(val => val.Project === title)
                  .map(({id, desktopSrc, mobileSrc, alt, Project}) => {
                    return <section key={id} className="portfolio__hero-container">
                    <img className="portfolio__hero-img-desktop" src={desktopSrc} alt={alt}/>
                    <img className="portfolio__hero-img-mobile" src={mobileSrc} alt={alt}/>
                    <h1 className="portfolio__hero-txt">{Project}</h1> 
                </section>
                  })}                      
       </>  
    )
}

export default PortfolioHero
