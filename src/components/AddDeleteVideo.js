import React, { Component } from 'react'
import { connect } from 'react-redux';

import Navbar from './Navbar'
import FooterPage from './FooterPage'

import { createVideos, fetchVideos, deleteVideos } from '../actions/actionCreators';

/*
"code": "pa1lxyUmG8Q",
"caption": "Crazy Rich"
*/

import './styles/AddDeleteVideo.css'

class addVideoDelete extends Component {
    constructor(){
        super()
    }

    componentDidMount() {
            this.props.dispatch(fetchVideos())
    }


    createVideo(event){
        event.preventDefault()
        console.log(this.code.value)
        console.log(this.caption.value)
        this.props.dispatch(createVideos({
            code: this.code.value,
            caption: this.caption.value,
        }))
    }

    deleteVideo(code){
        this.props.dispatch(deleteVideos({
            code: code
        }))
    }

    render() {

        const videos = this.props.videos.map((video, index)=>{
            return (
                <li key={index} className="videos-container">
                    <hr className="style-two"/>
                        <div className="codeList">{video.code}</div>
                        <div className="captionList">{video.caption}</div>  
                        <button onClick={()=> this.deleteVideo(video.code)}>delete</button>  
                </li>      
        )
        })

        return (
            <div>
            <Navbar />
            <div className="addVideoDeleteDiv">
            
            <form action="/" onSubmit={(event) => this.createVideo(event)}>
                    <div className="codeAdmin">
                        <p>Paste the code of any youtube video</p>
                        <input type="text" name="code" placeholder="code" ref={input => this.code = input} />
                    </div>
                    <div className="captionAdmin">
                        <p>Put a caption on the video you are uploading</p>
                        <input type="text" name="caption" placeholder="caption" ref={input => this.caption = input} />
                    </div>
                    <div className="submitButtonAdmin">
                        <input type="submit" value="Submit" />
                    </div>
                </form> 

                <hr/>

            <ul>
                {videos} 
            </ul>

            </div>
            <FooterPage/>
            </div>
            


        );

    }
}





const mapStateToProps = (state) => {
    //console.log(state)
    return{
        videos: state.videos.videos || [],
        comments: state.comments.comments || []
     } 
  }
  
  export default connect(mapStateToProps)(addVideoDelete);;