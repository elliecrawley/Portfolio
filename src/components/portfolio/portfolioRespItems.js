import ButtonSecondary from "../buttonSecondary"

const PortfolioRespItems = ({videoSrc, type, imgSrc, alt, Heading, Description, imgClass, videoClass, secondaryBtnClass, href}) => {

    return (

        <div className="Portfolio__resp-item-container">
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
