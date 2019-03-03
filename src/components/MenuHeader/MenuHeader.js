import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './MenuHeader.css';

const menuHeader = (props) => {
    return (
        <ul className="NavHeader">
            <NavLink className="HOME" to={{pathname: props.match.url + '/'}} /*to="/"*/ exact activeStyle={{color: '#2ecc71'}}>Home</NavLink>
            <NavLink className="ABOUT" to={{pathname: props.match.url + '/about'}} /*to="/about"*/ exact activeStyle={{color: '#2ecc71'}}>About</NavLink>
            <NavLink className="WORK" to={{pathname: props.match.url + '/work'}} /*to="/work"*/ exact activeStyle={{color: '#2ecc71'}}>Work</NavLink>
            <NavLink className="CONTACT" to={{pathname: props.match.url + '/contact'}} /*to="/contact"*/ exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default withRouter(menuHeader);