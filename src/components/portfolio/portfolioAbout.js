import SectionTitle from "../sectionTitle"

const PortfolioAbout = ({text}) => {
    return (
        <section className="Porfolio__about-container">
            <div className="Porfolio__about-inner-div">
                <SectionTitle text="About the project"/>
                <p className="about_body">{text}</p>
            </div>
        </section>
    )
}

export default PortfolioAbout
