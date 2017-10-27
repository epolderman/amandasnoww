import React,{Component} from 'react';
import '../style/Landing.css';


export default class Landing extends Component {


  render(){
    return(
          <div className="Landing">
            <div className="projects">
              <div className="projects-item medium">endless</div>
              <div className="projects-item small">blinks pb&j</div>
              <div className="projects-item large">swordfish space systems</div>
              <div className="projects-item small">mintcushions</div>
              <div className="projects-item tall">armorindex</div>
              <div className="projects-item small">All 2D Art</div>
              <div className="projects-item large-wide">All 3D Art</div>
              <div className="projects-item wide">wintersoldier</div>
              <div className="projects-item wide">gameworld</div>
            </div>
          </div>);
  }


}
