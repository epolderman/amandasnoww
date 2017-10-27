import React, { Component } from 'react';
import logo from '../Assets/logo.svg';
import '../style/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './Landing';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Navigation/>
              <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
