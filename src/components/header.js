import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {

    const [dropdown, setDropdown] = useState(false);

    const dropdownMenu = () => {
        setDropdown(!dropdown)
    }

    return (
        <>
        <header className="header" id="Home">
            <Link to="/" className="logo"><p>Ellie Crawley</p></Link>
            <FaBars onClick={dropdownMenu}/>
            <nav className="menu-items contrast-text-color">
                <ul>
                    <NavLink to="/#AboutText"><li>About</li></NavLink>
                    <NavLink to="/#Portfolio"><li>Portfolio</li></NavLink>
                    <NavLink to="/#Contact"><li>Contact</li></NavLink>
                </ul>
            </nav>
        </header>
        <nav className={dropdown ? "dropdownOpen" : "hidden" }>
            <ul>
                <NavLink to="/#AboutText"><li>About</li></NavLink>
                <NavLink to="/#Portfolio"><li>Portfolio</li></NavLink>
                <NavLink to="/#Contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default Header
