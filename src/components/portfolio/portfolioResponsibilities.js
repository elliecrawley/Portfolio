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
                    {project_details.map(({Key, Heading, Description, imgSrcMobile, imgSrcDesktop, alt, videoSrcDesktop, videoSrcMobile, type, media, secondaryBtn, href})=>{
                        if(media === "image"){
                            if(secondaryBtn === true){
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                imgSrcMobile={imgSrcMobile} 
                                imgSrcDesktop={imgSrcDesktop} 
                                alt={alt} 
                                imgMobileClass="Portfolio__resp-img hidden-desktop" 
                                imgDesktopClass="Portfolio__resp-img hidden-mobile"
                                videoMobileClass="hidden" 
                                videoDesktopClass="hidden" 
                                secondaryBtnClass="secondary-btn" 
                                href={href}/>
                            }else{
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                imgSrcMobile={imgSrcMobile} 
                                imgSrcDesktop={imgSrcDesktop} 
                                alt={alt} 
                                imgMobileClass="Portfolio__resp-img hidden-desktop"
                                imgDesktopClass="Portfolio__resp-img hidden-mobile" 
                                videoMobileClass="hidden" 
                                videoDesktopClass="hidden" 
                                secondaryBtnClass="hidden"/>
                            }                            
                        }else if(media === "video"){
                            if(secondaryBtn === true){
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcDesktop={videoSrcDesktop} 
                                videoSrcMobile={videoSrcMobile} 
                                type={type} 
                                imgMobileClass="hidden" 
                                imgDesktopClass="hidden" 
                                videoMobileClass="Portfolio__resp-img hidden-desktop" videoDesktopClass="Portfolio__resp-img hidden-mobile" secondaryBtnClass="secondary-btn" href={href}/>
                            }else{
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcDesktop={videoSrcDesktop} 
                                videoSrcMobile={videoSrcMobile} 
                                type={type} 
                                imgMobileClass="hidden"
                                imgDesktopClass="hidden" 
                                videoMobileClass="Portfolio__resp-img hidden-desktop" videoDesktopClass="Portfolio__resp-img hidden-mobile" secondaryBtnClass="hidden"/>
                            }
                        }else if(media === "videoDimageM"){
                            if(secondaryBtn === true){
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcDesktop={videoSrcDesktop}
                                type={type} 
                                imgSrcMobile={imgSrcMobile} 
                                alt={alt}
                                imgMobileClass="Portfolio__resp-img hidden-desktop" 
                                imgDesktopClass="hidden"
                                videoDesktopClass="Portfolio__resp-img hidden-mobile"
                                videoMobileClass="hidden" 
                                secondaryBtnClass="secondary-btn" 
                                href={href}/>
                            }else{
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcDesktop={videoSrcDesktop}
                                type={type} 
                                imgSrcMobile={imgSrcMobile} 
                                alt={alt}
                                imgMobileClass="Portfolio__resp-img hidden-desktop" 
                                imgDesktopClass="hidden"
                                videoDesktopClass="Portfolio__resp-img hidden-mobile"
                                videoMobileClass="hidden" 
                                secondaryBtnClass="hidden"/>  
                            }
                        } else if(media === "imageDvideoM"){
                            if(secondaryBtn === true){
                                return <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcMobile={videoSrcMobile} 
                                type={type} 
                                imgSrcDesktop={imgSrcDesktop} 
                                alt={alt}
                                videoDesktopClass="hidden" 
                                imgDesktopClass = "Portfolio__resp-img hidden-mobile"
                                imgMobileClass="hidden"
                                videoMobileClass="Portfolio__resp-img hidden-desktop" 
                                secondaryBtnClass="secondary-btn" 
                                href={href}/>
                            }else{
                                return <PortfolioRespItems  
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcMobile={videoSrcMobile} 
                                type={type} 
                                imgSrcDesktop={imgSrcDesktop} 
                                alt={alt}
                                videoDesktopClass="hidden" 
                                imgDesktopClass = "Portfolio__resp-img hidden-mobile"
                                imgMobileClass="hidden"
                                videoMobileClass="Portfolio__resp-img hidden-desktop"  
                                secondaryBtnClass="hidden"/>  
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
