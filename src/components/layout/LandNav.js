import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav.js';


const LandNav = () => {
    return (
        <nav className="nav-wrapper cyan darken-3">
        
            <ul className="container">
                <li><Link to='/' className="brand-logo center">Mark Teffeteller</Link></li>
                <li><SideNav className="left" /></li>        
            </ul>
        </nav>
    )
}

export default LandNav;