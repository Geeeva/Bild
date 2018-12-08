import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuFooter.css';

const menuFooter = () => {
    return (
        <ul className="NavFooter">
            <NavLink className="home" to="/">Home<span>&#47;</span></NavLink>
            <NavLink className="about" to="/about">About<span>&#47;</span></NavLink>
            <NavLink className="work" to="/work">Work<span>&#47;</span></NavLink>
            <NavLink className="contact" to="/contact">Contact</NavLink>
        </ul>
    )
}

export default menuFooter;