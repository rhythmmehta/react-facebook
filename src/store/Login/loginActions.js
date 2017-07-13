/*global FB*/

export const GET_LOGIN_STATUS = 'GET_LOGIN_STATUS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function checkLoginStatus() {
    return {
        type: GET_LOGIN_STATUS
    }
}

export function loginSucces(data) {
    return {
        type: LOGIN_SUCCESS,
        results: data
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE,
        message: 'Failed'
    }
}

export function getLogin() {
    return async (dispatch, getState) => {
        try{
            dispatch(checkLoginStatus());
            let results;
            await FB.login((response)=>{
                results=response.authResponse
                dispatch(loginSucces(results))
            });

        } catch(e) {
            console.log(e);
            dispatch(loginFailure());
        }
  }
}
