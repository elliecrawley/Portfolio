import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {

    const [dropdown, setDropdown] = useState(false);

    const dropdownMenu = () => {
        setDropdown(!dropdown)
    }

    const clickAway = () => {
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
            <button aria-label="Toggle dropdown menu" className="menu-icon" onClick={dropdownMenu} onBlur={clickAway}><FaBars/></button>
            <nav className="menu-items contrast-text-color">
                <ul>
                    <NavLink to="/#AboutText"><li>About</li></NavLink>
                    <NavLink to="/#Portfolio"><li>Portfolio</li></NavLink>
                    <NavLink to="/#Contact"><li>Contact</li></NavLink>
                </ul>
            </nav>
        </header>
        <nav className={dropdown ? "dropdown dropdownOpen" : "dropdown dropdownClosed" }>
            <ul>
                <NavLink to="/#AboutText" onFocus={focus} onClick={dropdownMenu}><li>About</li></NavLink>
                <NavLink to="/#Portfolio" onFocus={focus} onClick={dropdownMenu}><li>Portfolio</li></NavLink>
                <NavLink to="/#Contact" onFocus={focus} onClick={dropdownMenu}><li>Contact</li></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default Header
