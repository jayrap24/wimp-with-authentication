import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>          
                        {loggedIn ? (
                            <Navbar className="navBar">
                                <Navbar.Header >
                                    <Navbar.Brand>
                                      
                                            <Link to="/" onClick={this.logout}>
                                                <span>logout</span>

                                        </Link>
                                    </Navbar.Brand>
                                </Navbar.Header>
                            </Navbar>
                        ) : (
                            <Navbar className="navBar">
                                <Navbar.Header >
                                    <Navbar.Brand>
                                        <Link to="/login">
                                            <span>login</span>
                                        </Link>
                                        <Link to="/signup">
                                            <span>sign up</span>
				                        </Link>
                                    </Navbar.Brand>
                                </Navbar.Header>
                            </Navbar>
                            )}                  
            </div>

        );

    }
}

export default NavigationBar;