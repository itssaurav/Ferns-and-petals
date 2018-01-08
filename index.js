import React,{Component} from 'react';
import thunkMiddleware from 'redux-thunk';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider,connect } from 'react-redux';
import { createStore,compose, applyMiddleware } from 'redux';
import storeReducer from './src/reducers'
import Scenes from './routes'
import promise from 'redux-promise'

import {Router,Scene} from 'react-native-router-flux'
import store from './store/store';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const RouterWithRedux = connect()(Router);



export class FirstProject extends Component {
  render() {
    return(
      // <Provider> allows us to access the store for dispatching actions and receiving data from
      // the state in it's children i.e. <App/>
      <Provider store={store}>
          <RouterWithRedux  scenes={Scenes} />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
