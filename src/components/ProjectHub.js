import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProjectImageDisplay from './ProjectImageDisplay';
import {Image} from 'cloudinary-react';
import Iframe from 'react-iframe';
import '../style/ProjectHub.css';


class ProjectHub extends Component{

  constructor(props){
    super(props);
    this.state = {isimageOpen: false, imageID: null};
    this.imageOpen = this.imageOpen.bind(this);
  }

  imageOpen(imagestring){
    if(!this.state.isimageOpen)
    this.setState({isimageOpen: true, imageID: imagestring});
    else
    this.setState({isimageOpen: false, imageID: null});
  }

  renderImages(){
    return this.props.activeproject.imageList.map(image => {
      return(
        <li className='list-group-item list-group-item-secondary fingerhover'
            key={image} onClick={() => this.imageOpen(image)}>
            <Image cloudName="amandabaenz" publicId={image} width="25%"/>
        </li>
      );
    });
  }

  render(){
    const {activeproject} = this.props;
    if(!activeproject)
    return(<div style={{color: 'white'}}>Loading ProjectHub...</div>);
    else
    return(<div className="ProjectHub">
          <div className="ProjectDescription">
          <h3>{activeproject.projectName}</h3>
          <h6>{activeproject.description}</h6>
              <div className="ProjectDemo">
                {activeproject.demoURL !== 'none' ?
                <Iframe
                 url={activeproject.demoURL}
                 display="initial"
                 position="relative"
                 width="100%"
                 height="100%"
                 allowFullScreen/> : <Image cloudName="amandabaenz" publicId={activeproject.imageList[0]}  width="75%" />}
                 {activeproject.programming ? <a href={activeproject.repository}>GitHub Repo</a> : <div></div>}
               </div>
          </div>
          <div className="ProjectBody">
            <ul className="list-group nobullets textaligncenter">
            {this.renderImages()}
            </ul>
          </div>
          <div className={this.state.isimageOpen ? "ProjectImageDisplay" : "ProjectImageDisplay dissapear"}>
            <button className="btn fingerhover" onClick={() => this.imageOpen(0)} type="button">
            <span className="fa fa-times fa-lg" aria-hidden="true"></span></button>
            {this.state.isimageOpen ? <ProjectImageDisplay imageID={this.state.imageID}/> : <div></div>}
          </div>
      </div>);
  }

  }

function mapStateToProps(state, ownProps){
      return { activeproject: state.projects[ownProps.match.params.projectname] };
}

export default connect(mapStateToProps, null)(ProjectHub);
