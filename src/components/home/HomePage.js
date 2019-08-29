import React, { Component} from 'react';
import BrowserRouter from 'react-router-dom';
import ProjectList from '../projects/ProjectList';
import Skills from './Skills';



class HomePage extends Component {
    render(){
        return(
            <div className="dashboard container">
                <Skills /> 
            </div>
        )
    }
}

export default HomePage;