import { HashLink as NavLink } from "react-router-hash-link"
const Button = ({wrapper_outer, wrapper_inner, wrapper_inner_inner, btn_class, text}) => {
    return (
        <div className={wrapper_outer}>
            <div className={wrapper_inner}>
                <div className={wrapper_inner_inner}>
                    <NavLink to="/#Portfolio"><button className={btn_class}>{text}</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Button

