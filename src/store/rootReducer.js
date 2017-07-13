import { combineReducers } from 'redux'
import { login } from './Login/loginReducers';
import { user } from './UserDetails/userReducers';
import { logout } from './Logout/logoutReducer';

const rootReducer = combineReducers({
    login,
    user,
    logout
})


export default rootReducer
