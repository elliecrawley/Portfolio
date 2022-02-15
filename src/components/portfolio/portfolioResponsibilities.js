import {project_details, projectData} from "./portfolioData"
import SectionTitle from "../sectionTitle"
import PortfolioRespItems from "./portfolioRespItems"

const PortfolioResponsibilities = ({title}) => {
projectData()

    return (
        <section className="Portfolio__resp-container">
            <div className="Portfolio__resp-inner">
                <div className="Portfolio__resp-inner-inner">
                    <SectionTitle text={title}/>
                    {project_details.map(({Heading, Description, Key, imgSrc, alt, videoSrc, type, media, secondaryBtn, href})=>{
                        if(media === "image"){
                            if(secondaryBtn === true){
                                return <PortfolioRespItems key={Key} Heading={Heading} Description={Description} imgSrc={imgSrc} alt={alt} imgClass="Portfolio__resp-img" videoClass="hidden" secondaryBtnClass="secondary-btn" href={href}/>
                            }else{
                                console.log({secondaryBtn})
                                return <PortfolioRespItems key={Key} Heading={Heading} Description={Description} imgSrc={imgSrc} alt={alt} imgClass="Portfolio__resp-img" videoClass="hidden" secondaryBtnClass="hidden"/>
                            }
                            
                        }else{
                            if(secondaryBtn === true){
                                return <PortfolioRespItems key={Key} Heading={Heading} Description={Description} videoSrc={videoSrc} type={type} imgClass="hidden" videoClass="Portfolio__resp-img" imgSrc={imgSrc} secondaryBtnClass="secondary-btn" href={href}/>
                            }else{
                                return <PortfolioRespItems key={Key} Heading={Heading} Description={Description} videoSrc={videoSrc} type={type} imgClass="hidden" videoClass="Portfolio__resp-img" imgSrc={imgSrc} secondaryBtnClass="hidden"/>
                            }
                        }
                    }
                    )}           
                </div>
            </div>
        </section>
    )
}

export default PortfolioResponsibilities
