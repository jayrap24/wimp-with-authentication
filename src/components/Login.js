import React, { Component } from 'react'

import FooterPage from './FooterPage'
import Navbar from './Navbar'

import './styles/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="loginDiv">
            <Navbar />
               <div className="flex-container"> 
                    <div className="loginInfo">    
                        <div className="login-container">  
                            <div className="form-container">
                            <div className="loginTitle">Log In</div> 
                            <form action="/">
                                    <div className="usernameDiv">
                                        <div className="usernameLabel">
                                        <label for="username"></label>
                                        </div>
                                        <input type="text" placeholder="Username" required/>
                                    </div>
                                    <div className="passwordDiv">
                                        <div className="passwordLabel">
                                        <label for="psw"></label>
                                        </div>
                                        <input type="password" placeholder="Password" name="psw" required/>
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

export default Login;