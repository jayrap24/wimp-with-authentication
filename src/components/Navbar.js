import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles/Navbar.css';

class Navbar extends Component {
  render(){

  return(
    <div className="navigation">
     <Link to="/home">
        <div className="navbar-logo">
            WIMP
        </div>
      </Link>
    </div>
  )
  }
}




export default Navbar;