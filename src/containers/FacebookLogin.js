/*global FB*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as loginActions from '../store/Login/loginActions';
import * as logoutActions from '../store/Logout/logoutActions';
import UserDetails from './UserDetails';

export class FacebookLogin extends React.Component{
    static propTypes = {
    loginActions: PropTypes.object.isRequired,

};
constructor(){
    super();
}

onClickLogin(){
this.props.loginActions.getLogin();
}



 onClickLogout() {
    this.props.logoutActions.fblogout();

}

render(){
    let user;
if(this.props.login.result && this.props.login.result.accessToken ){
    user=(<UserDetails></UserDetails>)
}
    return(<div>

<button onClick={this.onClickLogin.bind(this)}>Login</button>

<button onClick={this.onClickLogout.bind(this)}>Logout</button>
<hr/>
<div>
    {user}
</div>
    </div>

    )
}
}
export default connect(
    state=>({
login: state.login,
logout: state.logout
    }),
    dispatch => ({
        loginActions:  bindActionCreators(loginActions, dispatch),
        logoutActions:  bindActionCreators(logoutActions, dispatch)
    })
)(FacebookLogin);
