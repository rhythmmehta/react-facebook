import {
 LOGOUT_SUCCESS,
 LOGOUT_FAILURE,
} from './logoutActions';

export function logout(state = {
  message: null,

}, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        message: action.message,
        
      })
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        message: action.message
      })

    default:
      return state
  }
}
