/*global FB*/
import {clearUserDetails} from '../UserDetails/userActions';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';



export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        message: 'Successfully logged out',
        
    }
}


export function logoutFailure() {
    return {
        type: LOGOUT_FAILURE,
        message: 'Could not logged out'
    }
}

export function fblogout() {
    return async (dispatch, getState) => {
        try{

            await FB.logout((response)=>{
                dispatch(logoutSuccess())
                dispatch(clearUserDetails())

            });

        } catch(e) {
            console.log(e);
            dispatch(logoutFailure());
        }
  }
}
