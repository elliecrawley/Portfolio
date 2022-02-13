import { useState } from "react"

const Button = ({wrapper_outer, wrapper_inner, wrapper_inner_inner, btn_class, text, link, ctaLink}) => {

    const [openWindow, setOpenWindow] = useState(true)

    function preventNewWindow (){
        console.log()
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
                </div>
            </div>
        </div>
    )
}

export default Button

