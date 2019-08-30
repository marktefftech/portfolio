import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Link , BrowserRouter, Route } from 'react-router-dom';


class SideNav extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav")
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li>
                        <a href="/home">
                            <i className="material-icons">home</i>Home
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <i className="material-icons">apps</i>Projects
                        </a>
                    </li>
                    <li>
                        <a href="/resume">
                            <i className="material-icons">description</i>Resume
                        </a>
                    </li>
                    <li>
                        <a href="/resume">
                            <i className="material-icons">emoji_people</i>Social
                        </a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                        <a className="subheader">Contact</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            mark@me.com
                        </a>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        )
    }
}

export default SideNav;