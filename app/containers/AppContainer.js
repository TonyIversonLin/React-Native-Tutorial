import React, { Component } from 'react'
import { Text, View, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home.js'

class AppContainer extends Component {

	render() {
		return <Home {...this.props}/>
	}
}

function mapDispatchToPros(dispatch){   //sending action trigger to the entire downstream
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {return {}} , mapDispatchToPros)(AppContainer);