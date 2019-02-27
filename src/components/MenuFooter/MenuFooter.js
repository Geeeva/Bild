import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuFooter.css';

const menuFooter = () => {
    return (
        <ul className="NavFooter">
            <NavLink className="home" to="/Bild" exact activeStyle={{color: '#2ecc71'}}>Home<span>&#47;</span></NavLink>
            <NavLink className="about" to="/Bild/about" exact activeStyle={{color: '#2ecc71'}}>About<span>&#47;</span></NavLink>
            <NavLink className="work" to="/Bild/work" exact activeStyle={{color: '#2ecc71'}}>Work<span>&#47;</span></NavLink>
            <NavLink className="contact" to="/Bild/contact" exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default menuFooter;