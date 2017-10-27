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
            title="3D Modeling Modeling Modelers :)"
            data-placement="auto"
            href="/3D">3D Modeling</a></li>

            <li className="nav-item"><a className="nav-link"
            data-toggle="tooltip"
            title="Graphic Design Art for Web Apps"
            data-placement="auto"
            href="/graphicdesign">Graphic Design</a></li>

            <li className="nav-item">
            <a className="nav-link"
            data-toggle="tooltip"
            title="User Inteface Game Art"
            data-placement="auto"
            href="/uiart">UI Art</a></li>

            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  data-toggle="dropdown"
            href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
            <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor: '#2C2E30'}}>
            <a className="dropdown-item" href="/boots/Nike">Endless [UI Art]</a>
            <a className="dropdown-item" href="/boots/Adidas">Armor Index [Graphic Design]</a>
            <a className="dropdown-item" href="/boots/Puma">Blinks PB&J [2D Game Art]</a>
            <a className="dropdown-item" href="/boots/UnderArmour">Swordfish Space Systems [3D Modeling]</a>
            <a className="dropdown-item" href="/boots/NewBalance">Winter Soldier [UI Art]</a>
            <a className="dropdown-item" href="/boots/Hummel">Game World [3D Modeling]</a>
            </div>
            </li>
      </ul>
    );

  }
  render(){

      return(
        <nav className="navbar navbar-toggleable-md navbar-expand-md">
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
