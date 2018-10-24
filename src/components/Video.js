import React, { Component } from 'react';

import { fetchPosts } from '../actions/actionCreators';
import { fetchComments } from '../actions/actionCreators'
import { connect } from 'react-redux';

class Video extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts())
        this.props.dispatch(fetchComments())
      };
    render(){
        console.log(this.props)
        return(
        <div className="wrapper">
            <p>little video</p>
        </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return{
        posts: state.posts.posts || [],
        comments: state.comments.comments || []
     } 
}

export default connect(mapStateToProps)(Video);