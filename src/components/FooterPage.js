import React, { Component } from 'react';
import { Footer } from "mdbreact";
import { Link } from 'react-router-dom'

import './styles/FooterPage.css';

class FooterPage extends Component {
  render(){

  return(
    <Footer className="font-small pt-4 mt-4">
      <div className="flex-container">
        <div className="leftFooter"> 
          <ul className="footerLi">
            <li>WIMP</li>
            <li>About</li>
            <Link to="/landing">
            <li>Admin</li>
            </Link>
          </ul>
        </div>

        <div className="rightFooter">
          <div className="copyright">
            &copy; {new Date().getFullYear()} WIMP 
          </div>
          <p>The best videos of the web</p>
        </div> 

      </div>
    </Footer>
  )
  }
}




export default FooterPage;