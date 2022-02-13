import SectionTitle from "./sectionTitle"

const AboutText = () => {
    return (
            <div className="about_inner_wrapper"> 
                <SectionTitle text="About me"/>
                <p className="about_body">I'm a Bristol based freelance web developer and designer specialising in Shopify. I believe that storytelling is a key part of growing and engaging your audience and your website needs to reflect that. My goal is to take your ideas and transform them into beautiful responsive websites which are user focused and accessible. My approach is collaborative and flexible, keeping you in control from start to finish. I have strong skills in HTML, CSS, JavaScript, and Liquid, and am working towards proficiency with React.<br/><br/>This portfolio was built using React. You can view the code for it by <a href="https://github.com/elliecrawley/Portfolio" target="_blank" rel="noreferrer" className="git-link">visiting my GitHub.</a>
                </p>
            </div>
    )
}

export default AboutText
