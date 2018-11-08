import { VIDEO_SUCCESS } from '../actions/actionCreators';

const initialState = {
    videos:[]
}

function videos(state = initialState, action){
    switch(action.type){
        case VIDEO_SUCCESS:
        //console.log(action.posts)
        return Object.assign({}, {
            videos: action.videos

        })
        default:
        return state;
    }
}



export default videos;