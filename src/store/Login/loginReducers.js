import {
    GET_LOGIN_STATUS,
 LOGIN_SUCCESS,
 LOGIN_FAILURE
} from './loginActions';

export function login(state = {
  isFetching: false,
  result: null,
  message: null
}, action) {
  switch (action.type) {
    case GET_LOGIN_STATUS:
      return Object.assign({}, state, {
        isFetching: true,
        message: null,
        result: null
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.results
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        result: null,
        message: action.message
      })
    default:
      return state
  }
}
