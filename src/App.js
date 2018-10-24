import React, { Component } from 'react';
import axios from 'axios'
import { Route, Redirect, } from 'react-router-dom'


// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      //console.log('Get user response: ')
      //console.log(response.data)
      if (response.data.user) {
        //console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
       // console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  

  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <div className="App">

        <NavigationBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />


            {loggedIn ? (<Home username={this.state.username} loggedIn={this.state.loggedIn} />) : (
                          <div>
                             
                            
                            <Route exact path="/" >
                              <Redirect to="/login" />
                            </Route>

                            <Route path="/login" render={() =>
                              <LoginForm updateUser={this.updateUser}/>
                            }/>
                            
                            <Route path="/signup" render={() =>
                              <Signup/>
                              
                            }/>
                            
                              
                         </div>
              )}
    
      </div>


    );
  }
}

export default App;
