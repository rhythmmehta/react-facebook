import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as userActions from '../store/UserDetails/userActions';

export class UserDetails extends React.Component{
    static propTypes = {
    userActions: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired

};
    constructor(){
        super();
    }
    componentWillMount(){
        this.props.userActions.getUserDetails(this.props.login.result.accessToken);
    }
    render(){
        let details;
        if(this.props.user.results) {
            details = (<div>
    <p><b>User Id:</b>{this.props.user.results.id}</p>
    <p><b>Name:</b>{this.props.user.results.name}</p>
    <p><b>Email:</b>{this.props.user.results.email}</p>
    <p><b>Gender:</b>{this.props.user.results.gender}</p>
    <p><b>Profile Photo:</b><img src={this.props.user.results.picture.data.url}/></p>

                </div>)
        }
        return(
            <div>
            {details}
            </div>
        )
    }
}

export default connect(
    state=>({
        login: state.login,
        user: state.user
    }),
    dispatch => ({
        userActions:  bindActionCreators(userActions, dispatch)
    })
)(UserDetails);
