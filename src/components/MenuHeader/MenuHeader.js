import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuHeader.css';

const menuHeader = () => {
    return (
        <ul className="NavHeader">
            <NavLink className="HOME" to="/Bild" exact activeStyle={{color: '#2ecc71'}}>Home</NavLink>
            <NavLink className="ABOUT" to="/Bild/about" exact activeStyle={{color: '#2ecc71'}}>About</NavLink>
            <NavLink className="WORK" to="/Bild/work" exact activeStyle={{color: '#2ecc71'}}>Work</NavLink>
            <NavLink className="CONTACT" to="/Bild/contact" exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default menuHeader;