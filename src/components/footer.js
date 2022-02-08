import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import {FaCopyright, FaGithub, FaLinkedin} from "react-icons/fa";


const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
<footer>
    <div className="footer-logo-container">
        <NavLink to="/#Home" className="footer-logo"><p>Ellie Crawley</p></NavLink>
        <p className='copyright'> Copyright <FaCopyright/> {year} All rights reserved</p>
    </div>
    <div className='footer-nav-container'>
        <nav className="menu-items contrast-text-color">
            <ul>
                <NavLink to="/#AboutText"><li>About</li></NavLink>
                <NavLink to="/#Portfolio"><li>Portfolio</li></NavLink>
                <NavLink to="/#Contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
        <div className='social'>
        <a href='#'><FaLinkedin/></a>
            <a href='#'><FaGithub/></a>  
        </div>
    </div> 
</footer>
)
};

export default Footer;
