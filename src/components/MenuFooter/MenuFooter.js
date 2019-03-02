import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuFooter.css';

const menuFooter = () => {
    return (
        <ul className="NavFooter">
            <NavLink className="home" to="/" exact activeStyle={{color: '#2ecc71'}}>Home<span>&#47;</span></NavLink>
            <NavLink className="about" to="/about" exact activeStyle={{color: '#2ecc71'}}>About<span>&#47;</span></NavLink>
            <NavLink className="work" to="/work" exact activeStyle={{color: '#2ecc71'}}>Work<span>&#47;</span></NavLink>
            <NavLink className="contact" to="/contact" exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default menuFooter;