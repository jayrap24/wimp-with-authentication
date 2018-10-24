//this file is an external store where react components will interact with
// which makes this file called the store. The store will
// be connected to the /components/App.js file 
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from './reducers/index';



const store = createStore(rootReducer, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;