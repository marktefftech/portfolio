import React, { Component } from 'react';
import '/Users/markteffeteller/portfolio/src/App.css';

class Skills extends Component {
    render() {
        return(
           <div>
                <h2 className="title center white-text">Find me on the Web</h2>
                <div className="center">
                <ul className="center">
                    <li><a href={"https://github.com/marktefftech/"}> <section className="card container center">Github</section></a></li>
                    <li><a href={"https://www.linkedin.com/in/mark-teffeteller"}> <section className="card container center">Linkedin</section></a></li>
                    <li><a href={"https://dribbble.com/markteffeteller"}> <section className="card container center">Dribbble</section></a></li>
                    <li><a href={"https://dribbble.com/https://www.kaggle.com/markteffeteller/account"}> <section className="card container center">Kaggle</section></a></li>
                    <li><a href={"https://profile.edx.org/u/markteffeteller"}> <section className="card container center">EdX</section></a></li>
                    <li><a href={"https://www.udemy.com/user/mark-teffeteller/"}> <section className="card container center">Udemy</section></a></li>
                    <li><a href={"https://www.facebook.com/mark.teffeteller"}> <section className="card container center">Facebook</section></a></li>
                    <li><a href={"https://www.instagram.com/markteffeteller/"}> <section className="card container center">Instagram</section></a></li>
                    <li><a href={"https://twitter.com/wildminute"}> <section className="card container center">Twitter</section></a></li>
                </ul>
                </div>
                
             </div>
        )
    }
}
export default Skills
