import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {comment: ''};
  }
  render()
        {
              return(
              <form className='comment-box'>
              <h4>Add a comment</h4>
              <textarea
              value={this.state.comment}
              <div>
              <button action="submit">Submit Comment</button>
              </div>
              </form>);
        }
}

export default connect(null, actions)(CommentBox);
