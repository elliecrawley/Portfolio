import React from "react";
import {useState, useRef, useMemo, useEffect} from "react";


const PortfolioItems = ({heading, text, languages, programmes, src, alt, classHidden}) => {
        
        const targetRef = useRef(null);

        const [addClass, setAddClass] = useState(()=>{
            ""
        });
      
        const callbackFunction = entries => {
          const [entry] = entries;
          if(entry.isIntersecting){
            setAddClass("figure-shadow")
            console.log(entry.isIntersecting)
          }
        }
      
        const options = useMemo(() => {
          return{
              root: null,
              rootMargin: '0px',
              threshold: 1,
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

                <figure className={addClass} ref={targetRef}>  
                        <img src={src} alt={alt}/>               
                        <figcaption className="portfolio-text">
                                <h3>{heading}</h3>
                                <div className="revealOnHover">
                                        <p>{text}</p>
                                        <br/>
                                        <p>Languages: {languages}</p> 
                                        <br/>
                                        <p className={classHidden}>Programmes: {programmes}</p> 
                                </div>
                        </figcaption>  
                </figure>                    
    )
    
}

export default PortfolioItems
