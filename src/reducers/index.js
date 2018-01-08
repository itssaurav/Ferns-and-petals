import { combineReducers } from 'redux';
import InitialReducer from './initialReducers'
import routes from './routes'
const initialState = {

  data:'saurav'
}
const rootReducer = combineReducers({

  data:InitialReducer
})
export default rootReducer;
