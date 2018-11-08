import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createVideos, fetchVideos, deleteVideos } from '../actions/actionCreators';

/*
"code": "pa1lxyUmG8Q",
"caption": "Crazy Rich"
*/


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
                        <div className="code">{video.code}</div>
                        <div className="caption">{video.caption}</div>  
                        <button onClick={()=> this.deleteVideo(video.code)}>delete</button>  
                </li>      
        )
        })

        return (
            <div className="addVideoDeleteDiv">
                <form action="/" onSubmit={(event) => this.createVideo(event)}>
                    <div className="code">
                        <input type="text" name="code" placeholder="code" ref={input => this.code = input} />
                    </div>
                    <div className="caption">
                        <input type="text" name="caption" placeholder="caption" ref={input => this.caption = input} />
                    </div>
                    <div className="submitButton">
                        <input type="submit" value="Submit" />
                    </div>
                </form> 

            <ul>
                {videos} 
            </ul>

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