import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <ul className="center container">
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to='/home'>Social</NavLink></li>
            </ul>
        </div>
    )
}

export default Landing
