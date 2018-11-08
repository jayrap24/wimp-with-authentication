import React, { Component } from 'react';
import { fetchVideos } from '../actions/actionCreators';
import { fetchComments } from '../actions/actionCreators';
import { connect } from 'react-redux';

import FooterPage from './FooterPage'
import Navbar from './Navbar'
import Comments from './Comments'
import './styles/Single.css'

class Single extends Component {
    componentDidMount() {
        this.props.dispatch(fetchVideos())
        this.props.dispatch(fetchComments())
      };
    render(){
            const postCode = this.props.match.params.postId;//PostId from the Link Paramaters
            let caption = []; //Create a variable caption for this component
            let code = [];
            //Push the caption from the redux data
            if(this.props.videos.length > 0){
                const postArray = this.props.videos
                const postIndex = postArray.findIndex(function(post){
                    return post.code === postCode
                })   
                caption.push(this.props.videos[postIndex].caption);
                code.push(this.props.videos[postIndex].code);

            } 
            //console.log(code[0])
            let postsExists = false;
                if(this.props.videos.length > 0){
                    postsExists = true;
                    //console.log(this.props.posts)
                    const postArray = this.props.videos
                    const postIndex = postArray.findIndex(function(post){
                        return post.code === postCode
                    })   
                } 
                const loggedIn = this.props.loggedIn;
                console.log(this.props)
        return(   
            <div> 
                <Navbar/>
                <div className="container">
                    <div className="videoPlayer">
                    <iframe className="player" type="text/html"
                        src={`https://www.youtube.com/embed/${postCode}`} frameBorder="0" title="video"/>
                    </div>
                        <div className="caption">
                            <strong>{caption}</strong>
                        </div>
                        <hr className="style-one"/>

                    <div className="comments-container">
                        <Comments postId={postCode} />
                    </div>
                </div>
             <FooterPage/>
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

export default connect(mapStateToProps)(Single);


  /*
            const array = this.props.posts;//the array of objects posts
            const postIndex = array.findIndex(function(video){
                return video.code == postId;
                })
                //console.log(this.props.posts)
            */