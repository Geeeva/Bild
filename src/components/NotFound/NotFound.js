import React from 'react';
import Route from 'react-router-dom/Route';
import {BrowserRouter as Router, NavLink, Redirect, Prompt} from 'react-router-dom';

const notfound = () => {
    return (
        <div className="Footer">
            <div className="col-5 col-middle">
                <h1 className="text-jumbo text-ginormous">Oops!</h1>
                <h2>We can't seem to find the page you're looking for.</h2>
                <h6>Error code: 404</h6>
                </div>
        </div>
    )
}

export default notfound;