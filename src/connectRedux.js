//This file is where we connect the data(state) to be accessible
// to all of the other components by using connect from 'react-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Home from './components/Home';

//this function maps whatever is in our state/store to our props
function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

//this passes the dispatch functions from the actionCreators.js
//which is all the functions we created in actionCreators.js
//Dispatch takes an action (which we import) 
//and sends it off to a reducer, which receives that action and actually changes the state of the app. 
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,
    dispatch)
}





// the 2 functions will surface to the components via props
// MainPage can use this.props to get the data
const App = connect(mapStateToProps, 
    mapDispatchToProps)(Home);

export default App;