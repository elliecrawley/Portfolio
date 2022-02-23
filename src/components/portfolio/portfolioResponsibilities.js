import {project_details, projectData} from "./portfolioData"
import React, { Suspense } from 'react';

const SectionTitle = React.lazy(() => import("../sectionTitle"));
const PortfolioRespItems = React.lazy(() => import("./portfolioRespItems"));

const PortfolioResponsibilities = ({title}) => {
projectData()

    return (
        <section className="Portfolio__resp-container">
            <div className="Portfolio__resp-inner">
                <div className="Portfolio__resp-inner-inner">
                    <Suspense fallback={<div></div>}>
                        <SectionTitle text={title}/>
                    </Suspense>
                    {project_details.map(({Key, Heading, Description, imgSrcMobile, imgSrcDesktop, alt, videoSrcDesktop, videoSrcMobile, type, media})=>{
                        if(media === "image"){
       
                        return  <Suspense fallback={<div></div>}>
                                <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                imgSrcMobile={imgSrcMobile} 
                                imgSrcDesktop={imgSrcDesktop} 
                                alt={alt} 
                                imgMobileClass="Portfolio__resp-img hidden-desktop"
                                imgDesktopClass="Portfolio__resp-img hidden-mobile" 
                                videoMobileClass="hidden" 
                                videoDesktopClass="hidden"/></Suspense>                          
                        }else if(media === "video"){  

                        return <Suspense fallback={<div></div>}>
                                <PortfolioRespItems 
                                key={Key} 
                                Heading={Heading} 
                                Description={Description} 
                                videoSrcDesktop={videoSrcDesktop} 
                                videoSrcMobile={videoSrcMobile} 
                                type={type} 
                                imgMobileClass="hidden"
                                imgDesktopClass="hidden" 
                                videoMobileClass="Portfolio__resp-img hidden-desktop" videoDesktopClass="Portfolio__resp-img hidden-mobile"/></Suspense>
                        }else if(media === "videoDimageM"){
        
                        return <Suspense fallback={<div></div>}>
                                <PortfolioRespItems 
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
                                videoMobileClass="hidden"/></Suspense>  
                        } else if(media === "imageDvideoM"){
        
                        return <Suspense fallback={<div></div>}>
                                <PortfolioRespItems  
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
                                videoMobileClass="Portfolio__resp-img hidden-desktop"/></Suspense>  
                        }
                    }
                    )}           
                </div>
            </div>
        </section>
    )
}

export default PortfolioResponsibilities
