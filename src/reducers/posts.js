import { POST_SUCCESS } from '../actions/actionCreators';

const initialState = {
    posts:[]
}

function posts(state = initialState, action){
    switch(action.type){
        case POST_SUCCESS:
        //console.log(action.posts)
        return Object.assign({}, {
            posts: action.posts

        })
        default:
        return state;
    }
}



export default posts;