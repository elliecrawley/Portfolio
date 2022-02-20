import PortfolioItems from "./portfolioItems"
import SectionTitle from "../sectionTitle"
import { Link } from "react-router-dom"
import ECthumbnail from "../../assets/images/ECthumbnail.png"
import KOKOthumbnail from "../../assets/images/KOKOheroMobile.png"
import Yollythumbnail from "../../assets/images/YollyThumbnail.png"
import AveryRowthumbnail from "../../assets/images/AveryRowThumbnail.png"
import Camelthumbnail from "../../assets/images/CamelSki.png"
import Accessibilitythumbnail from "../../assets/images/accessiblethumbnail.png"

const PortfolioHeading = () => {

    return (
        <div className="portfolio-wrapper">
            <SectionTitle text="Portfolio"/>
            <div className="portfolio-item-wrapper">
                <Link to="/Emily-Carter" className="portfolio-item" aria-label="Link to 'Emily Carter' project page">
                    <PortfolioItems 
                        heading='Emily Carter' 
                        text="Shopify store created for Emily Carter, an award-winning British designer specialising in hand illustrated silk accessories, stationery, and furnishings." 
                        classHidden="hidden" 
                        languages="Liquid, JavaScript, HTML5, CSS3" 
                        src = {ECthumbnail} 
                        alt="Emily Carter Homepage"
                    />
                </Link>
                <Link to="/KOKO" className="portfolio-item" aria-label="Link to 'KOKO' project page">
                    <PortfolioItems 
                        heading='KOKO' 
                        text="Shopify store created for KOKO, an exclusive eco-friendly 100% organic apparel brand with designs influenced by artists and musicians" 
                        languages="HTML5, CSS3, Liquid" 
                        classHidden="hidden" 
                        src={KOKOthumbnail} 
                        alt="KOKO Homepage"
                    />
                </Link>
                <Link to="/Avery-Row" className="portfolio-item" aria-label="Link to 'Avery Row' project page">
                    <PortfolioItems 
                        heading='Avery Row' 
                        text="Shopify store created for Avery Row, an independent British brand specialising in organic textiles and accessories for children." 
                        languages="JavaScript, HTML5, CSS3, Liquid" 
                        programmes="Klaviyo" 
                        src={AveryRowthumbnail}
                        alt="Avery Row Homepage"
                    />
                </Link>
                {/* <Link to="/ForestWise" className="portfolio-item">
                    <PortfolioItems heading='ForestWise' text="A concept piece designing the homepage for a fictional 'forest school' business." languages="JavaScript, HTML5, CSS3, PHP" programmes="InkScape, AdobeXD, ScrollMagic, GSAP" src='images/ForestWisethumbnail.png'/>
                </Link> */}
                <Link to="/Yolly" className="portfolio-item" aria-label="Link to 'Yolly' project page">
                    <PortfolioItems 
                        heading='Yolly'
                        text="Shopify Store created for Yolly, an independant florist based in London." 
                        languages="HTML5, CSS3, Liquid" 
                        programmes="MailChimp" 
                        src={Yollythumbnail}
                        alt="Yolly Homepage"
                    />
                </Link>
                <Link to="/Camel-Ski-School" className="portfolio-item" aria-label="Link to 'Camel Ski School' project page">
                    <PortfolioItems 
                        heading='Camel Ski School' 
                        text="Shopify store created for Camel Ski School, a Cornwall based watersports company who have expanded to sell branded merchendise." 
                        languages="HTML5, CSS3, Liquid" 
                        classHidden="hidden" 
                        src={Camelthumbnail}
                        alt="Camel Ski Homepage"
                    />
                </Link>
                <Link to="/Accessiblity-tool" className="portfolio-item" aria-label="Link to 'Accessibility Tool' project page">
                    <PortfolioItems 
                        heading='Accessibility Tool' 
                        text="A selection of tools designed to help impove web content accessibility." 
                        languages="HTML5, CSS3, JavaScript" 
                        classHidden="hidden" 
                        src={Accessibilitythumbnail}
                        alt="Accessibility Tools Homepage"
                    />
                </Link>
            </div>
        </div>
    )
}

export default PortfolioHeading
