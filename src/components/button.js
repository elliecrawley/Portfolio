import { useState } from "react"

const Button = ({wrapper_outer, wrapper_inner, wrapper_inner_inner, link, ctaLink, text}) => {

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
                </div>
            </div>
        </div>
    )
}

export default Button

