import React, {useState, useRef, useMemo, useEffect, Suspense} from "react";
const ButtonSecondary = React.lazy(() => import( "../buttonSecondary"))

const PortfolioRespItems = ({videoSrcDesktop, videoSrcMobile, type, imgSrcDesktop, imgSrcMobile, alt, Heading, Description, imgMobileClass, imgDesktopClass, videoMobileClass, videoDesktopClass, href}) => {

        const targetRef = useRef(null);
        const [addClass, setAddClass] = useState("Portfolio__resp-item-container");
      
        const callbackFunction = entries => {
          const [entry] = entries;
          if(entry.isIntersecting){
            setAddClass("Portfolio__resp-item-container Portfolio__resp-item-container-shadow")
          }
        }
      
        const options = useMemo(() => {
          return{
              root: null,
              rootMargin: '0px',
              threshold: 0.33,
          }
          
        }, []);

        useEffect(() => {
          const observer = new IntersectionObserver(callbackFunction, options);
          const currentTarget = targetRef.current;
          if(currentTarget) observer.observe(currentTarget);

          return () => {
            if(currentTarget) observer.unobserve(currentTarget);
          }
        }, [targetRef, options]);

    return (

        <div className={addClass} ref={targetRef}>
            <video className={videoDesktopClass} height="auto" controls preload="metadata">
                <source src={videoSrcDesktop} type={type}/>
            </video>   
            <video className={videoMobileClass} height="auto" controls preload="metadata">
                <source src={videoSrcMobile} type={type}/>
            </video>       
            <img className={imgDesktopClass} src={imgSrcDesktop} alt={alt}/>
            <img className={imgMobileClass} src={imgSrcMobile} alt={alt}/>
            <div className="Portfolio__resp-txt">
                <h3>{Heading}</h3>
                <p>{Description}</p>
                <Suspense fallback={<div></div>}>
                  <ButtonSecondary secondaryBtnClass="secondary-btn" href={href}/>
                </Suspense>
            </div>
        </div>
    )
}

export default PortfolioRespItems
