import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { fetchPosts } from './actions/actionCreators';
import { fetchComments } from './actions/actionCreators'
import { connect } from 'react-redux';

//components
import Home from './components/Home'
import Single from './components/Single';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import AddDeleteVideo from './components/AddDeleteVideo'

//styles
import './components/styles/App.css'



class App extends Component {



  

  componentDidMount() {
    this.props.dispatch(fetchPosts())
    this.props.dispatch(fetchComments())
  }

  
  
  render() {


   let videosExists = false;
   if(this.props.videos.length > 0){
       videosExists = true;
       //console.log(this.props)
   } 
    return (
      <div className="App">
              <Route path="/landing" render={() =>
                    <Landing />
                }/>  
               <Route path="/login" render={() =>
                    <Login/>
                }/> 
                 <Route path="/signup" render={() =>
                    <Signup/>
                }/> 
                 <Route path="/admin" render={() =>
                    <AddDeleteVideo/>
                }/> 
              <Route path="/home" render={() =>
                    <Home/>
                }/> 
                <Route exact path="/view/:postId" render={(props) =>
                    <Single {...props} code={this.props} /> 
                }/>      
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return{
      videos: state.videos.videos || [],
      comments: state.comments.comments || []
   } 
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(App);;
