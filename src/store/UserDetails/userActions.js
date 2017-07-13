import {getDetails} from '../../api/details';
export const DETAILS_FETCH = 'DETAILS_FETCH';
export const DETAILS_SUCCESS = 'DETAILS_SUCCESS';
export const DETAILS_FAILURE = 'DETAILS_FAILURE';

export function intiateGetDetails() {
    return {
        type: DETAILS_FETCH
    }
}

export function userDetailsSuccess(data) {
    return {
        type: DETAILS_SUCCESS,
        results: data
    }
}

export function userDetailsFailure() {
    return {
        type: DETAILS_FAILURE,
        message: 'Details Not Received'
    }
}

export function getUserDetails(accessToken) {
    return async (dispatch, getState) => {
        try{
            dispatch(intiateGetDetails());

            let details = await getDetails(accessToken);

            if( details) {
                dispatch(userDetailsSuccess(details));
            } else if( details ) {
                dispatch(userDetailsFailure());
            }


        } catch(e) {
            console.log(e);
            dispatch(userDetailsFailure());
        }
  }
}

export const CLEAR_USER_DETAILS='CLEAR_USER_DETAILS'
export function clearUserDetails(){
    return {
        type: CLEAR_USER_DETAILS
    }
}
