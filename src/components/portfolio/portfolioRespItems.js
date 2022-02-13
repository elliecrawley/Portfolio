import ButtonSecondary from "../buttonSecondary"
import React, {useState, useRef, useMemo, useEffect} from "react";

const PortfolioRespItems = ({videoSrc, type, imgSrc, alt, Heading, Description, imgClass, videoClass, secondaryBtnClass, href}) => {

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
              threshold: 0.7,
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
            <video className={videoClass} height="auto" controls>
                <source src={videoSrc} type={type}/>
            </video>       
            <img className={imgClass} src={imgSrc} alt={alt}/>
            <div className="Portfolio__resp-txt">
                <h3>{Heading}</h3>
                <p>{Description}</p>
                <ButtonSecondary secondaryBtnClass={secondaryBtnClass} href={href}/>
            </div>
        </div>
    )
}

export default PortfolioRespItems
