//This index file is because we cannot have 2 files to export in reducer
//therefore we combine the 2 reducer in the index file and export that

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments'

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;