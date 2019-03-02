import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './MenuFooter.css';

const menuFooter = (props) => {
    return (
        <ul className="NavFooter">
            <NavLink className="home" to={{pathname: props.match.url + '/'}}/*to="/" */exact activeStyle={{color: '#2ecc71'}}>Home<span>&#47;</span></NavLink>
            <NavLink className="about" to={{pathname: props.match.url + '/about'}} /*to="/about"*/ exact activeStyle={{color: '#2ecc71'}}>About<span>&#47;</span></NavLink>
            <NavLink className="work" to={{pathname: props.match.url + '/work'}} /*to="/work"*/ exact activeStyle={{color: '#2ecc71'}}>Work<span>&#47;</span></NavLink>
            <NavLink className="contact" to={{pathname: props.match.url + '/contact'}} /*to="/contact"*/ exact activeStyle={{color: '#2ecc71'}}>Contact</NavLink>
        </ul>
    )
}

export default withRouter(menuFooter);