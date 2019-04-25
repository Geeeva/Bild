import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuHeader.css';

const menuHeader = props => {
    return (
        <ul className="NavHeader">
            <NavLink className="HOME" to="/" exact activeStyle={{color: '#2ecc71'}}>Home</NavLink>
            <NavLink className="ABOUT" to="/about" exact activeStyle={{color: '#2ecc71'}}>About</NavLink>
            <NavLink className="WORK" to="/work" exact activeStyle={{color: '#2ecc71'}}>Work</NavLink>
            <NavLink className="CONTACT" to="/contact" exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default menuHeader;