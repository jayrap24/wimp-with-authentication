import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createComments, fetchComments } from '../actions/actionCreators';

import './styles/Comments.css'

class Comments extends Component {
    constructor(){
        super()
    }

    componentDidMount() {
        if(this.props.postId){
            this.props.dispatch(fetchComments(this.props.postId))
            console.log(this.props.postId)
        }
  
    }
    

    createComment(event){
        event.preventDefault()
        console.log(this.username.value)
        console.log(this.comment.value)
        this.props.dispatch(createComments({
            user: this.username.value,
            text: this.comment.value,
            videoId:this.props.postId
        }))
    }


    render(){
        const comments = this.props.comments.map((comment)=>{
            return (
                <div className="comments-container">
                <hr className="style-two"/>
                        <div className="user">{comment.user}</div>
                        <div className="text">{comment.text}</div>
                        
                </div>
            
        )
        })
        return(
        <div className="wrapper">
            <form action="/" onSubmit={(event) => this.createComment(event)}>

                <div className="usernameInput">
                <input type="text" name="username" placeholder="username" ref={input => this.username = input} />
                </div>


                <div className="commentTextarea">
                <textarea type="text" name="comment" placeholder="Add a public comment" ref={input => this.comment = input} ></textarea>
                </div>

                <div className="submitButton">
                <input type="submit" value="Submit" />
                </div>

            </form> 
            <hr className="style-one"/>
            <p>{comments}</p>
        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log(state)
    console.log(props.postId)
    return{
        videos: state.videos.videos || [],
        comments: state.comments.comments || []
     } 
     
}

export default connect(mapStateToProps)(Comments);;