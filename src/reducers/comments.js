import { COMMENT_SUCCESS, CREATE_COMMENT_SUCCESS } from '../actions/actionCreators';

const initialState = {
    comments:[]
}

function comments(state = initialState, action){
    switch(action.type){
        case COMMENT_SUCCESS:
        //console.log(action.posts)
            return Object.assign({}, {
                comments: action.comments

            })
        case CREATE_COMMENT_SUCCESS:
            return Object.assign({}, {
                comments: [...action.comments, action.comment]

            })
        default:
        return state;
    }
}

export default comments;