import React, { Component } from 'react'

import Navbar from './Navbar'

import './styles/Login.css'
import connect from "react-redux/es/connect/connect";
import {login} from '../actions/authActions';

import {Redirect} from 'react-router-dom';

class Login extends Component {
    onSubmit(event) {
        event.preventDefault();
        return this.props.dispatch(login(this.username.value, this.password.value));
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/home" />;
        }

        return (
            <div className="loginDiv">
            <Navbar />
               <div className="flex-container"> 
                    <div className="loginInfo">    
                        <div className="login-container">  
                            <div className="form-container">
                            <div className="loginTitle">Log In</div> 
                            <form onSubmit={(event) => this.onSubmit(event)}>
                                    <div className="usernameDiv">
                                        <div className="usernameLabel">
                                        <label htmlFor="username"></label>
                                        </div>
                                        <input type="text" placeholder="Username" required ref={input => this.username = input}/>
                                    </div>
                                    <div className="passwordDiv">
                                        <div className="passwordLabel">
                                        <label htmlFor="psw"></label>
                                        </div>
                                        <input type="password" placeholder="Password" name="psw" required ref={input => this.password = input}/>
                                    </div>
                                    <div className="submitDiv">
                                        <button type="submit">Login</button>
                                    </div>
                            </form> 
                            </div>                                 
                        </div>
                    </div>
                    
            </div>
            
            </div>
        );

    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);