import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/Nav.css';

export default class Navigation extends Component{

  constructor(props) {
      super(props);
      this.state = {toggle: false};
      this.turnToggle = this.turnToggle.bind(this);
    }

    turnToggle() {
      if(!this.state.toggle)
      this.setState({toggle: true});
      else
      this.setState({toggle: false});
    }

  renderContent(){
    return(
      <ul className="navbar-nav ml-auto" style={{listStyle: 'none'}}>

            <li className="nav-item"><a className="nav-link"
            data-toggle="tooltip"
            title="Linked In"
            data-placement="auto"
            href="https://www.linkedin.com/in/amandasnoww/"><span className="fa fa-linkedin fa-lg" aria-hidden="true"></span></a></li>

            <li className="nav-item"><a className="nav-link"
            data-toggle="tooltip"
            title="Twitter"
            data-placement="auto"
            href="https://twitter.com/amandasaenz"><span className="fa fa-twitter fa-lg" aria-hidden="true"></span></a></li>

            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  data-toggle="dropdown"
            href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
            <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor: '#2C2E30'}}>
            <a className="dropdown-item" href="/endless">Endless [UI Art]</a>
            <a className="dropdown-item" href="/armorindex">Armor Index [Graphic Design Art]</a>
            <a className="dropdown-item" href="/mintcushions">Mintcushions [Graphics Design Art]</a>
            <a className="dropdown-item" href="/blinkspbj">Blinks PB&J [2D Game Art]</a>
            <a className="dropdown-item" href="/swordfishspacesystems">Swordfish Space Systems [3D Modeling]</a>
            <a className="dropdown-item" href="/wintersoldier">Winter Soldier [UI Art]</a>
            <a className="dropdown-item" href="/gameworld">Game World [3D Modeling]</a>
            <a className="dropdown-item" href="/findingscott">Finding Scott [2D UI/Game Art]</a>
            <a className="dropdown-item" href="/miscellaneous">Miscellaneous [Random Art]</a>
            </div>
            </li>
      </ul>
    );

  }
  render(){

      return(
        <nav className="navbar navbar-toggleable-md navbar-expand-md sticky-top">
         <Link className="navbar-brand" to={'/'}>
         <img src={require('../Assets/electric.svg')} width="32.5" height="32.5" className="d-inline-block align-top" alt=""/>
          amanda saenz
          </Link>

         <button className="navbar-toggler navbar-toggler-right" type="button"
                 data-toggle="collapse"
                 data-target=".navHeaderCollapse" aria-expanded="false" aria-controls="navHeaderCollapse"
                 aria-label="Toggle navigation">
         <span className={this.state.toggle ? "fa fa-bars fa-rotate-90" : "fa fa-bars"}
               onClick={() => this.turnToggle()}>
         </span>
         </button>

         <div className="collapse navbar-collapse navHeaderCollapse">
          {this.renderContent()}
         </div>
 </nav>
            );

  }
}
