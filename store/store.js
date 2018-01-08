
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger'
import storeReducer from '../src/reducers'




const middlewares = [thunkMiddleware,logger];
//let persistedState = loadState();

// if(persistedState){
//   persistedState.form = formReducer;
// }else{
//   persistedState = {};
// }

const store = createStore(storeReducer , compose(
    applyMiddleware(...middlewares),

  ));



// store.subscribe(() => {
//   saveState(store.getState())
// })
export default store;
