import React, { Component} from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';



class HomePage extends Component {
    render(){
        return(
            <div className="dashboard container">
                <Skills /> 
                <Education />
                <Experience />
            </div>
        )
    }
}

export default HomePage;