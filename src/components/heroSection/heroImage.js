import React from "react"
import PortPic from "../../assets/images/PortPic.png"

const HeroImage = () => {
    return (
        <> 
            <div className="hero-img hero-img-mobile hidden-desktop" alt="Ellie Crawley"/>
            <img className="hero-img hero-img-desktop hidden-mobile" src={PortPic}/>
        </>
    )
}

export default HeroImage
