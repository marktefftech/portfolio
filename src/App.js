import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import LandNav from './components/layout/LandNav.js';
import HomePage from './components/home/HomePage';
import Landing from './components/home/Landing';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Resume from './components/resume/Resume';

class App extends Component {
    render() {
      return (
        <div className="App">
          <BrowserRouter>
            <LandNav />
            <Switch>     
               <Route exact path='/' component={Landing} />
               <Route exact path='/home' component={HomePage} />
               <Route exact path='/projects' component={ProjectList} />
               <Route exact path='/resume' component={Resume} />
            </Switch>
         </BrowserRouter>

        </div>
      )
    }
};

export default App;
