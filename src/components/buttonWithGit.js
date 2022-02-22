const Button = ({wrapper_outer, wrapper_inner, wrapper_inner_inner, link, ctaLink, git_btn, git_href, git_link}) => {
    
    return (
        <div className={wrapper_outer}>
            <div className={wrapper_inner}>
                <div className={wrapper_inner_inner}>
                    <a aria-label="Link to Live Site" href={link} className={ctaLink} target="_blank" rel="noreferrer">
                        View Live Site
                    </a>
                    <div className={git_link}>
                    <a aria-label="Link to code on GItHub" href={git_href} className={git_btn} target="_blank" rel="noreferrer">
                        View GitHub repository
                    </a>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Button

