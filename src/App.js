import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FacebookLogin from './containers/FacebookLogin';

class App extends Component {

  render() {
    return (
      <div>
				<FacebookLogin></FacebookLogin>


			</div>
    );
  }
}


export default App;
