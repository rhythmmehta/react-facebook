import {
    DETAILS_FETCH,
 DETAILS_SUCCESS,
 DETAILS_FAILURE,
 CLEAR_USER_DETAILS
} from './userActions';

export function user(state = {
  isFetching: false,
  results: null,
  message: null
}, action) {
  switch (action.type) {
    case DETAILS_FETCH:
      return Object.assign({}, state, {
        isFetching: true,
        message: null,
        results: null
      })
    case DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      })
    case DETAILS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        results: null,
        message: action.message
      })
      case CLEAR_USER_DETAILS:
      return Object.assign({}, state, {
        results: null,

      })
    default:
      return state
  }
}
