  
import { combineReducers } from 'redux';
import {LoginReducer} from './LoginReducer';
import {SignUpReducer} from './SignupReducer';
import {UserIpReducer} from './UserIpReducer';


export default combineReducers({
    LoginReducer,
    SignUpReducer,
    UserIpReducer
})