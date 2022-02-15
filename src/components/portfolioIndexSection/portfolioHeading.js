import PortfolioItems from "./portfolioItems"
import SectionTitle from "../sectionTitle"
import { Link } from "react-router-dom"

const PortfolioHeading = () => {

    return (
        <div className="portfolio-wrapper">
            <SectionTitle text="Portfolio"/>
            <div className="portfolio-item-wrapper">
                <Link to="/Emily-Carter" className="portfolio-item" aria-label="Link to 'Emily Carter' project page">
                    <PortfolioItems heading='Emily Carter' text="Shopify store created for Emily Carter, an award-winning British designer specialising in hand illustrated silk accessories, stationery and furnishings." classHidden="hidden" languages="Liquid, JavaScript, AJAX, HTML5, CSS3" src='images/ECthumbnail.png' alt="Emily Carter Homepage"/>
                </Link>
                <Link to="/WineSpark" className="portfolio-item" aria-label="Link to 'WineSpark' project page">
                    <PortfolioItems heading='WineSpark' text="Shopify store created for WineSpark, a UK based wine subscription service." languages="Liquid, JavaScript, HTML5, CSS3" classHidden="hidden" src='images/WineSparkthumbnail.jpg' alt="WineSpark Homepage"/>
                </Link>
                <Link to="/Cultured-Biomecare" className="portfolio-item" aria-label="Link to 'Cultured Biomecare' project page">
                    <PortfolioItems heading='Cultured Biomecare' text="Shopify store created for Cultured Biomecare, an award-winning UK based skin care brand." languages="Liquid, JavaScript, HTML5, CSS3" classHidden="hidden" src='images/Culturedthumbnail.png' alt="Cultured Biomecare Homepage"/>
                </Link>
                <Link to="/Avery-Row" className="portfolio-item" aria-label="Link to 'Avery Row' project page">
                    <PortfolioItems heading='Avery Row' text="Shopify store created for Avery Row, an independent British brand specialising in organic, natural textiles and accessories for children." languages="JavaScript, HTML5, CSS3, Liquid" programmes="Klaviyo" src='images/AveryRowThumbnail.png' alt="Avery Row Homepage"/>
                </Link>
                {/* <Link to="/ForestWise" className="portfolio-item">
                    <PortfolioItems heading='ForestWise' text="A concept piece designing the homepage for a fictional 'forest school' business." languages="JavaScript, HTML5, CSS3, PHP" programmes="InkScape, AdobeXD, ScrollMagic, GSAP" src='images/ForestWisethumbnail.png'/>
                </Link> */}
                <Link to="/Accessiblity-tool" className="portfolio-item" aria-label="Link to 'Accessibility Tool' project page">
                    <PortfolioItems heading='Accessibility Tool' text="A selection of tools designed to help impove web content accessibility." languages="HTML5, CSS3, JavaScript" classHidden="hidden" src='images/accessiblethumbnail.png' alt="Accessibility Tools Homepage"/>
                </Link>
                <Link to="/Smaller-Projects" className="portfolio-item" aria-label="Link to 'Smaller projects' project page">
                <PortfolioItems heading='Smaller Projects' text="A collection of smaller work items done for a variety of Shopify clients." languages="HTML5, CSS3, Liquid" programmes="MailChimp" src='images/Yolly2thumbnail.png' alt="Yolly Homepage"/>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioHeading
