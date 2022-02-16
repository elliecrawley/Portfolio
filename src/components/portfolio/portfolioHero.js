const PortfolioHero = () => {

    const HeroImages= [{id: 1, Project:"Website Accessibility Tool", src:"../images/accessible-hero.png", alt:"accessibility tool"},{id: 2, Project:"Emily Carter", src:"../images/emilyCarter.png", alt:"Emily Carter Homepage"},{id: 3, Project:"WineSpark", src:"../images/WineSpark.jpg", alt:"WineSpark Homepage"},{id: 4, Project:"Cultured Biomecare", src:"../images/Cultured2.png", alt:"Cultured Biomecare Homepage"},{id: 5, Project:"ForestWise", src:"../images/ForestWise.png", alt:"ForestWise Homepage"},{id: 6, Project:"Smaller Projects", src:"../images/YollyHero.png", alt:"Yolly Homepage"},{id: 7, Project:"Avery Row", src:"../images/AveryRow.png", alt:"Avery Row Homepage"}];

    var title = document.title;

    return (   
        <>
        {HeroImages.filter(val => val.Project === title)
                  .map(({id, src, alt, Project}) => {
                    return <section key={id} className="portfolio__hero-container">
                    <img className="portfolio__hero-img" src={src} alt={alt}/>
                    <h1 className="portfolio__hero-txt">{Project}</h1> 
                </section>
                  })}                      
       </>  
    )
}

export default PortfolioHero
