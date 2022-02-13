import SectionTitle from "../sectionTitle"
import { Link } from "react-router-dom";
import PortfolioItems from "../portfolioIndexSection/portfolioItems";

const ViewMore = () => {

    const projectImages= [{id: 1, path:"/Accessiblity-tool", Project:"Website Accessibility Tool", src:"../images/accessiblethumbnail.png", alt:"Accessibility Tools thumbnail", heading:"Accessibility Tools"},{id: 2, path:"/Emily-Carter", Project:"Emily Carter", src:"../images/ECthumbnail.png", alt:"Emily Carter thumbnail", text:"text", languages:"languages", programmes:"programmes"},{id: 3, path:"/WineSpark",Project:"WineSpark", src:"../images/WineSparkthumbnail.jpg", alt:"WineSpark thumbnail"},{id: 4, path:"/Cultured-Biomecare", Project:"Cultured Biomecare", src:"../images/Culturedthumbnail.png", alt:"Cultured Biomecare thumbnail"},{id: 5, path:"/ForestWise", Project:"ForestWise", src:"../images/ForestWisethumbnail.png", alt:"ForestWise thumbnail"},{id: 6, path:"/Smaller-Projects", Project:"Smaller Projects", src:"../images/Yolly2thumbnail.png", alt:"Smaller Projects thumbnail", heading:"Smaller Projects"},{id: 7, path:"/Avery-Row", Project:"Avery Row", src:"../images/AveryRow.png", alt:"Avery Row thumbnail"}];

    var title = document.title;

    return (
        <section className="View-more__container">
            <SectionTitle text="View More Projects"/>
            <div className="View-more__container-inner">
            {projectImages.filter(val => val.Project !== title && val.id !== 5)
                  .map(({id, src, alt, Project, path}) => {
                        const arr = projectImages.length - 1;
                        const thumbnailFlexWidth = "Portfolio__thumbnails portfolio-item thumbnailLength--" + arr;
                        const aria = "Link to " + {Project} + "project page";
                    return <Link to={path} key={id} className={thumbnailFlexWidth} aria-label={aria}><PortfolioItems src={src} alt={alt} heading={Project}/></Link>
                  })}             
            </div>
        </section>
    )
}

export default ViewMore
