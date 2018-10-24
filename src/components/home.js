import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import Video from './Video'

import { fetchPosts } from '../actions/actionCreators';
import { fetchComments } from '../actions/actionCreators'
import { connect } from 'react-redux';


class Home extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts())
        this.props.dispatch(fetchComments())
      };
    
    render(){
        const loggedIn = this.props.loggedIn;
        
        return(
            <div className="mainpage-container">
                          {loggedIn ? (
                             <div className="mainpage-container">
                             <Jumbotron className="jumbotron-container">
                                 <h1>Welcome WIMP</h1><h3>{this.props.username}</h3>
                                     <Video />
                             </Jumbotron>
                                <hr/>
                         </div>
                            
                        ) : (
                            null
                            )}                       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        posts: state.posts.posts || [],
        comments: state.comments.comments || []
     } 
}

export default connect(mapStateToProps)(Home);;
