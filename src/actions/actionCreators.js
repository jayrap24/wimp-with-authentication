//Action to fetch Post Data from Api
export const FETCH_POSTS = "FETCH_POSTS";
export const fetchPosts = () => (dispatch) => {
    fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
        .then(posts => dispatch(postSuccess(posts))); 
}
export const POST_SUCCESS = "POST_SUCCESS";
export function postSuccess(posts){
    return {
        type: POST_SUCCESS,
        posts: posts
    }
}


//Action to fetch Comments Data from Api
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const fetchComments = (videoId) => (dispatch) => {
    
    if(videoId){
        fetch('http://localhost:8080/api/comments/'+videoId)
        .then(res => res.json())
        .then(comments => dispatch(commentSuccess(comments))); 
        console.log(videoId)
    }
}

export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export function commentSuccess(comments){
    return {
        type: COMMENT_SUCCESS,
        comments: comments
    }
}


//Action to create Comments Data from Api
export const CREATE_COMMENTS = "CREATE_COMMENTS";
export const createComments = ({user, text, videoId}) => (dispatch) => {
    fetch('http://localhost:8080/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user, text, videoId})
    })
        .then(() => dispatch(fetchComments(videoId))); 

}

export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export function createCommentSuccess(comment){
    return {
        type: CREATE_COMMENT_SUCCESS,
        comment: comment
    }
}


//Action to create Comments Data from Api
export const CREATE_VIDEOS = "CREATE_VIDEOS";
export const createVideos = ({code, caption}) => (dispatch) => {
    fetch('http://localhost:8080/api/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({code, caption})
    })
        .then(() => dispatch(fetchVideos())); 

}

export const CREATE_VIDEO_SUCCESS = "CREATE_VIDEO_SUCCESS";
export function createVideoSuccess(video){
    return {
        type: CREATE_VIDEO_SUCCESS,
        video: video
    }
}

//Action to fetch Comments Data from Api
export const FETCH_VIDEOS= "FETCH_VIDEOS";
export const fetchVideos = () => (dispatch) => {
        fetch('http://localhost:8080/api/videos/')
        .then(res => res.json())
        .then(videos => dispatch(videoSuccess(videos))); 

}

export const VIDEO_SUCCESS = "VIDEO_SUCCESS";
export function videoSuccess(videos){
    return {
        type: VIDEO_SUCCESS,
        videos: videos
    }
}


export const DELETE_VIDEOS = "DELETE_VIDEOS";
export const deleteVideos = ({code}) => (dispatch) => {
    fetch('http://localhost:8080/api/videos/'+ code, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => dispatch(fetchVideos())); 

}