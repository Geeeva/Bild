import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuHeader.css';

const menuHeader = () => {
    return (
        <ul className="NavHeader">
            <NavLink className="home" to="/">Home</NavLink>
            <NavLink className="about" to="/about">About</NavLink>
            <NavLink className="work" to="/work">Work</NavLink>
            <NavLink className="contact" to="/contact">Contact</NavLink>
        </ul>
    )
}

export default menuHeader;