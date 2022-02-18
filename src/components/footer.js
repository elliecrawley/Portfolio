import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import {FaCopyright, FaGithub, FaLinkedin} from "react-icons/fa";


const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
<footer>
    <div className="footer-logo-container">
        <NavLink to="/#Home" className="footer-logo"><p>ELLIECRAWLEY</p></NavLink>
        <p className='copyright'> Copyright <FaCopyright/> {year} <nbsp/> All rights reserved</p>
    </div>
    <div className='footer-nav-container'>
        <nav className="menu-items contrast-text-color">
            <ul>
               <li><NavLink to="/#AboutText">About</NavLink></li>
                <li><NavLink to="/#Portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/#Contact">Contact</NavLink></li>
            </ul>
        </nav>
        <div className='social'>
        <a href='https://www.linkedin.com/in/elliecrawley' target="_blank" rel="noreferrer" aria-label="Link to LinkedIn profile"><FaLinkedin/></a>
        <a aria-label="Link to GitHub profile" href='https://github.com/elliecrawley' target="_blank" rel="noreferrer"><FaGithub/></a>  
        </div>
    </div> 
</footer>
)
};

export default Footer;
