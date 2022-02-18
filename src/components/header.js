import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {

    const [dropdown, setDropdown] = useState(false);

    const dropdownMenu = () => {
        setDropdown(!dropdown)
    }

    const clickAway = (event) => {
        if(dropdown === true){
            setDropdown(false)
        }
    }

    const focus = () => {
        if(dropdown === false){
            setDropdown(true)
        }
    }

    return (
        <>
        <header className="header" id="Home">
            <Link to="/" className="logo"><p>ELLIECRAWLEY</p></Link>
            <button aria-label="Toggle dropdown menu" className="menu-icon" onClick={dropdownMenu} onBlur={clickAway}>{dropdown ? <AiOutlineClose/> : <AiOutlineMenu/> }</button>
            <nav className="menu-items contrast-text-color">
                <ul>
                    <li><NavLink to="/#AboutText">About</NavLink></li>
                    <li><NavLink to="/#Portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/#Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
        <nav className={dropdown ? "dropdown dropdownOpen" : "dropdown dropdownClosed" }>
            <ul className="dropDownUL">
                <li><NavLink to="/#AboutText" onFocus={focus} onClick={dropdownMenu}>About</NavLink></li>
                <li><NavLink to="/#Portfolio" onFocus={focus} onClick={dropdownMenu}>Portfolio</NavLink></li>
                <li><NavLink to="/#Contact" onFocus={focus} onClick={dropdownMenu}>Contact</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Header
