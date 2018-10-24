import { COMMENT_SUCCESS } from '../actions/actionCreators';

const initialState = {
    comment:[]
}

function comments(state = initialState, action){
    switch(action.type){
        case COMMENT_SUCCESS:
        //console.log(action.posts)
        return Object.assign({}, {
            comments: action.comments

        })
        default:
        return state;
    }
}

export default comments;