import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import '/Users/markteffeteller/portfolio/src/App.css' ;

function Landing() {
    return (
        <div className="land-container">
            <ul className="center container">
                <li><NavLink className="land-link" to='/home'>Home</NavLink></li>
                <li><NavLink className="land-link" to='/projects'>Projects</NavLink></li>
                <li><NavLink className="land-link" to='/resume'>Resume</NavLink></li>
                <li><NavLink className="land-link" to='/home'>Social</NavLink></li>
            </ul>
        </div>
    )
}

export default Landing
