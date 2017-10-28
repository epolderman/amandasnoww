import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/Landing.css';
import VikingAmanda from './VikingAmanda';


export default class Landing extends Component {


  render(){
    return(
          <div className="Landing">
            <div className="projects">
              <Link className="projects-item medium endless" to={'/endless'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>endless</h6>
              </Link>
              <Link className="projects-item wide swordfish" to={'/swordfishspacesystems'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>swordfish ss</h6>
              </Link>
              <Link className="projects-item medium armor" to={'/armorindex'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>armor index</h6>
              </Link>
              <Link className="projects-item wide blink" to={'/blinkspbj'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>blinks pb&j</h6>
              </Link>
              <Link className="projects-item medium mintcushions" to={'/mintcushions'}>
                <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                <h6>mintcushions</h6>
              </Link>
              <Link className="projects-item medium winter" to={'/wintersoldier'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>wintersoldier</h6>
              </Link>
              <Link className="projects-item wide gameworld" to={'/gameworld'}>
                  <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                  <h6>gameworld</h6>
              </Link>
              <Link className="projects-item medium art3d" to={'/art3d'}>
                <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                <h6>art3d</h6>
              </Link>
              <Link className="projects-item medium art2d" to={'/art2d'}>
                <img src={require('../Assets/electric.svg')} alt={"endless"}/>
                <h6>art2d</h6>
              </Link>
            </div>
            <div className="footer">
                <div className="container">
                  <h3>Amanda</h3>
                </div>
                <div className="containerImage">
                  <VikingAmanda />
                </div>
                <div className="displayList">
                  <button className="btn btn-danger">Linked In</button>
                  <button className="btn btn-danger">Twitter</button>
                </div>
            </div>
          </div>);
  }


}
