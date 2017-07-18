import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class AppContainer extends Component {
	render() {
		return <View>
			<Text style={{marginTop: 20}}>
				I am App Container
			</Text>
		</View>
	}
}

function mapDispatchToPros(dispatch) {   //sending action trigger to the entire downstream
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => {return {}}, mapDispatchToPros)(AppContainer);