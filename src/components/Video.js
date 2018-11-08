import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import './styles/Video.css'

class Video extends Component {
    render(){
       
        return(
            <div className="mainpage-container">
                <div className="grid-thumbnails">   
                    <Link className="links"to={`/view/${this.props.video.code}`} onClick={this.forceUpdate}>  
                        <img className="thumbnails" src={this.props.video.thumbnail_src} width="200" height="150" alt="" />
                            <div className="caption-title">
                                <span> {this.props.video.caption} </span>
                            </div> 
                    </Link>                
                </div> 
        
            </div>
        )
    }
}

export default Video