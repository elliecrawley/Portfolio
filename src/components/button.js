import { useState } from "react"

const Button = ({wrapper_outer, wrapper_inner, wrapper_inner_inner, btn_class, text, link, ctaLink, git_btn, git_href, git_link}) => {

    const [openWindow, setOpenWindow] = useState(true)

    function preventNewWindow (){
        if(window.location.pathname === "/"){
                setOpenWindow(false)
            }
    }
    
    return (
        <div className={wrapper_outer}>
            <div className={wrapper_inner}>
                <div className={wrapper_inner_inner}>
                    <a aria-label="Link to Live Site" href={link} className={ctaLink} onClick={preventNewWindow} target={openWindow ?  "_blank" : "_self"} rel="noreferrer">
                        {text}
                    </a>
                    <div className={git_link}>
                    <a aria-label="Link to code on GItHub" href={git_href} className={git_btn} onClick={preventNewWindow} target={openWindow ?  "_blank" : "_self"} rel="noreferrer">
                        View GitHub repository
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Button

