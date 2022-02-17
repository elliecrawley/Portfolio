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
                        <button className={btn_class}>{text}</button>
                    </a>
                    <a aria-label="Link to code on GItHub" href={git_href} className={git_link} onClick={preventNewWindow} target={openWindow ?  "_blank" : "_self"} rel="noreferrer">
                        <button className={git_btn}>View GitHub repository</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Button

