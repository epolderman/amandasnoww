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
                  <img src={require('../Assets/electric.svg')} alt={"swordfishspacesystems"}/>
                  <h6>swordfish ss</h6>
              </Link>
              <Link className="projects-item medium armor" to={'/armorindex'}>
                  <img src={require('../Assets/electric.svg')} alt={"armorindex"}/>
                  <h6>armor index</h6>
              </Link>
              <Link className="projects-item wide blink" to={'/blinkspbj'}>
                  <img src={require('../Assets/electric.svg')} alt={"blinkspbj"}/>
                  <h6>blinks pb&j</h6>
              </Link>
              <Link className="projects-item medium mintcushions" to={'/mintcushions'}>
                <img src={require('../Assets/electric.svg')} alt={"mintcushions"}/>
                <h6>mintcushions</h6>
              </Link>
              <Link className="projects-item medium winter" to={'/wintersoldier'}>
                  <img src={require('../Assets/electric.svg')} alt={"wintersoldier"}/>
                  <h6>wintersoldier</h6>
              </Link>
              <Link className="projects-item wide gameworld" to={'/gameworld'}>
                  <img src={require('../Assets/electric.svg')} alt={"gameworld"}/>
                  <h6>gameworld</h6>
              </Link>
              <Link className="projects-item medium art3d" to={'/findingscott'}>
                <img src={require('../Assets/electric.svg')} alt={"findingscott"}/>
                <h6>finding scott</h6>
              </Link>
              <Link className="projects-item medium art2d" to={'/miscellaneous'}>
                <img src={require('../Assets/electric.svg')} alt={"miscellaneous"}/>
                <h6>miscellaneous</h6>
              </Link>
            </div>
            <div className="footer">
                <div className="container">
                  <h3>Connect with Amanda</h3>
                </div>
                <div className="containerImage">
                  <VikingAmanda />
                </div>
                <div className="displayList">
                  <a href="https://www.linkedin.com/in/amandasnoww/" className="btn fingerhover"><span className="fa fa-linkedin fa-lg" aria-hidden="true"></span></a>
                  <a href="https://twitter.com/amandasaenz" className="btn fingerhover"><span className="fa fa-twitter fa-lg" aria-hidden="true"></span></a>
                </div>
                <div className="poweredBy">
                  <div className="poweredContainer">
                  <img src={require('../Assets/reactLogo.svg')} alt={"React"}/>
                  <img src={require('../Assets/reduxLogo.svg')} alt={"Redux"}/>
                  </div>
                </div>
            </div>
          </div>);
  }


}
