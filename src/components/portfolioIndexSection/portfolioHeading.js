import React, { Suspense } from 'react';
import { Link } from "react-router-dom"
import ECthumbnail from "../../assets/images/ECthumbnail.webp"
import KOKOthumbnail from "../../assets/images/KOKOThumbnail.webp"
import Yollythumbnail from "../../assets/images/YollyThumbnail.webp"
import AveryRowthumbnail from "../../assets/images/AveryRowThumbnail.webp"
import Camelthumbnail from "../../assets/images/CamelSkiThumbnail.webp"
import Accessibilitythumbnail from "../../assets/images/accessibleThumbnail.webp"

const PortfolioItems  = React.lazy(() => import("./portfolioItems"))
const SectionTitle  = React.lazy(() => import("../sectionTitle"))


const PortfolioHeading = () => {

    return (
        <div className="portfolio-wrapper">
            <Suspense fallback={<div></div>}>
                <SectionTitle text="Portfolio"/>
            </Suspense>
            <div className="portfolio-item-wrapper">
                <Link to="/Emily-Carter" className="portfolio-item" aria-label="Link to 'Emily Carter' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='Emily Carter' 
                        text="Shopify store created for Emily Carter, an award-winning British designer specialising in hand illustrated silk accessories, stationery, and furnishings." 
                        classHidden="hidden" 
                        languages="Liquid, JavaScript, HTML5, CSS3" 
                        src = {ECthumbnail} 
                        alt="Emily Carter Homepage"
                    /></Suspense>
                </Link>
                <Link to="/KOKO" className="portfolio-item" aria-label="Link to 'KOKO' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='KOKO' 
                        text="Shopify store created for KOKO, an exclusive eco-friendly 100% organic apparel brand with designs influenced by artists and musicians" 
                        languages="HTML5, CSS3, Liquid" 
                        classHidden="hidden" 
                        src={KOKOthumbnail} 
                        alt="KOKO Homepage"
                    /></Suspense>
                </Link>
                <Link to="/Avery-Row" className="portfolio-item" aria-label="Link to 'Avery Row' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='Avery Row' 
                        text="Shopify store created for Avery Row, an independent British brand specialising in organic textiles and accessories for children." 
                        languages="JavaScript, HTML5, CSS3, Liquid" 
                        programmes="Klaviyo" 
                        src={AveryRowthumbnail}
                        alt="Avery Row Homepage"
                    /></Suspense>
                </Link>
                {/* <Link to="/ForestWise" className="portfolio-item">
                    <PortfolioItems heading='ForestWise' text="A concept piece designing the homepage for a fictional 'forest school' business." languages="JavaScript, HTML5, CSS3, PHP" programmes="InkScape, AdobeXD, ScrollMagic, GSAP" src='images/ForestWisethumbnail.png'/>
                </Link> */}
                <Link to="/Yolly" className="portfolio-item" aria-label="Link to 'Yolly' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='Yolly'
                        text="Shopify Store created for Yolly, an independant florist based in London." 
                        languages="HTML5, CSS3, Liquid" 
                        programmes="MailChimp" 
                        src={Yollythumbnail}
                        alt="Yolly Homepage"
                    /></Suspense>
                </Link>
                <Link to="/Camel-Ski-School" className="portfolio-item" aria-label="Link to 'Camel Ski School' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='Camel Ski School' 
                        text="Shopify store created for Camel Ski School, a Cornwall based watersports company who have expanded to sell branded merchendise." 
                        languages="HTML5, CSS3, Liquid" 
                        classHidden="hidden" 
                        src={Camelthumbnail}
                        alt="Camel Ski Homepage"
                    /></Suspense>
                </Link>
                <Link to="/Accessiblity-tool" className="portfolio-item" aria-label="Link to 'Accessibility Tool' project page">
                    <Suspense fallback={<div></div>}>
                    <PortfolioItems 
                        heading='Accessibility Tool' 
                        text="A selection of tools designed to help impove web content accessibility." 
                        languages="HTML5, CSS3, JavaScript" 
                        classHidden="hidden" 
                        src={Accessibilitythumbnail}
                        alt="Accessibility Tools Homepage"
                    /></Suspense>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioHeading
