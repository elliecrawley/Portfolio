import React from "react"
import PortPic from "../../assets/images/PortPic.png"

const HeroImage = () => {
    return (
        <> 
            <div className="hero-img hero-img-mobile" alt="Ellie Crawley"/>
            <img className="hero-img hero-img-desktop" src={PortPic}/>
        </>
    )
}

export default HeroImage
