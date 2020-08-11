import { combineReducers } from "redux"
import getClients from './clients';
import getCounter from './counterReduser';
import Auth from './authReducer';
import Logged from './isLoged';
const allReducers = combineReducers({
    getClients,
    getCounter,
    Auth,
    Logged
})
export default allReducers;