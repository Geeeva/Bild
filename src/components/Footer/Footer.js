import React from 'react';
import {withRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MenuFooter from '../MenuFooter/MenuFooter';
import './Footer.css';

const footer = () => {
    return (
        <div className="Footer">
            <div className="container-fluid findOut">      
                <div className="container">
                    <div className="FindOutWrapper">
                        <div className="Message"> 
                            {'Are You Ready To Be Blown Away?'}
                        </div>
                        <button className="FindOutBtn">CLICK HERE TO FIND OUT</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright"> 
                <div className="container">
                    <div className="CopyrightWrapper">
                        <div className="Copyright">{'Copyright 2013 Display. All Rights Reserved.'}</div>
                        <MenuFooter className="FooterMenu"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(footer);