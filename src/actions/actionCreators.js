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

//Action to fetch Post Data from Api
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const fetchComments = () => (dispatch) => {
    fetch('http://localhost:8080/api/comments')
        .then(res => res.json())
        .then(comments => dispatch(commentSuccess(comments))); 
}

export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export function commentSuccess(comments){
    return {
        type: COMMENT_SUCCESS,
        comments: comments
    }
}
