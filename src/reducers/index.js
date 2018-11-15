//This index file is because we cannot have 2 files to export in reducer
//therefore we combine the 2 reducer in the index file and export that

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import videos from './videos';
import comments from './comments'
import authReducer from './auth';

const rootReducer = combineReducers({videos, comments, routing: routerReducer, auth: authReducer});

export default rootReducer;