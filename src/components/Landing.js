import React, { Component } from 'react'
import $ from 'jquery'; 
import { Link } from 'react-router-dom'

import './styles/Landing.css'

class Landing extends Component {
    render() {
        $(document).ready(function() {
            setTimeout(function() {
                $("#main").removeClass("is-loading");
            }, 100)
        });
        return (
            <div className="navigation-container">          
                        <div className="landingNav">
                        <div className="navbar-logo">
                            WIMP
                        </div>
                        </div>
                            <div className="welcome">   
                                <div id="main" className="is-loading">
                                
                                    <h1>
                                        WIMP
                                    </h1>
                            <Link to="/login">
                                <div className="landingLogin">
                                    Login
                                </div>
                            </Link>
                            <Link to="/signup">
                                <div className="landingSignup">
                                    Sign Up
                                </div>
                            </Link>
                                </div>
                            </div>                 
            </div>
          
        );

    }
}

export default Landing;