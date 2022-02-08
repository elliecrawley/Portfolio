import React from "react";
const PortfolioItems = ({heading, text, languages, programmes, src, alt, classHidden}) => {
    return (

                <figure>  
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
