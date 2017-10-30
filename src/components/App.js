import React, { Component } from 'react';
import logo from '../Assets/logo.svg';
import '../style/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './Landing';
import Navigation from './Navigation';
import ProjectHub from './ProjectHub';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Navigation/>
              <Route exact path="/" component={Landing} />
              <Route exact path="/:projectname" component={ProjectHub} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
