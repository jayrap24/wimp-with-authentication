import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import {Redirect} from 'react-router-dom';

import FooterPage from './FooterPage'
import Navbar from './Navbar'

import './styles/Login.css'
import { signup } from '../actions/authActions';

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {signup: false}
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({signup: true})
        return this.props.dispatch(signup(this.username.value, this.password.value));
    }

    render() {
        if (this.state.signup) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="loginDiv">
            <Navbar />
               <div className="flex-container"> 
                    <div className="loginInfo">    
                        <div className="login-container">  
                            <div className="form-container">
                            <div className="loginTitle">Sign Up</div> 
                            <form onSubmit={(event) => this.onSubmit(event)}>
                                    <div className="usernameDiv">
                                        <div className="usernameLabel">
                                        <label for="username"></label>
                                        </div>
                                        <input type="text" placeholder="Username" required ref={input => this.username = input}/>
                                    </div>
                                    <div className="passwordDiv">
                                        <div className="passwordLabel">
                                        <label for="psw"></label>
                                        </div>
                                        <input type="password" placeholder="Password" name="psw" required ref={input => this.password = input}/>
                                    </div>
                                    <div className="submitDiv">
                                        <button type="submit">Sign up</button>
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

export default connect()(Signup);