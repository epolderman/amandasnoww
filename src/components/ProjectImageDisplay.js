import React from 'react'
import {Image} from 'cloudinary-react';

export default (props) => {

  return(
    <div className="imageDisplay">
      {props.imageID ? <Image cloudName="amandabaenz" publicId={props.imageID} width="100%" height="100%"/>
      : <div className="imageDisplay">Image not Found</div>}
    </div>
  );
}
