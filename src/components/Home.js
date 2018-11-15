import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import FooterPage from './FooterPage'
import Video from './Video'
import './styles/Home.css'
import Single from './Single';
import Navbar from './Navbar'



import { fetchVideos } from '../actions/actionCreators';
import { fetchComments } from '../actions/actionCreators'
import { connect } from 'react-redux';



//<Video {...this.props} key={i} i={i} post={post}/> 

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(fetchVideos())
        this.props.dispatch(fetchComments())
      };
    
    render(){
        const loggedIn = this.props.loggedIn;
        //console.log(loggedIn)

        console.log(this.props)
        return(
            <div>
            <Navbar/>
            <div className="mainpage-container">
                                    <Jumbotron className="jumbotron-container" id="homeJumbotron">
                                        <div id="welcome-statement">
                                        <span>Hello Wimp.</span>
                                        </div>
                                    </Jumbotron>
                                <div className="container" id="video-grid-container">
                                    <div className="topPicks">
                                        <div className="seeWhatsTrending">
                                            <h2>See what's trending</h2>
                                        </div>
                                    <hr className="style-one"/>
                                    </div>
                                    <ul>    
                                        {this.props.videos.map((video, i) => 
                                            <div className ="list" key={i}>
                                                <li>
                                                <Video {...this.state} key={i} i={i} video={video}/> 
                                                </li>
                                            </div>
                                            )}
                                    </ul>
                                </div>
                                <FooterPage/>                    
            </div>
          </div>
        )
    }
}




const mapStateToProps = (state) => {
    //console.log(state)
    return{
        videos: state.videos.videos || [],
        comments: state.comments.comments || []
     } 
}

export default connect(mapStateToProps)(Home);;
