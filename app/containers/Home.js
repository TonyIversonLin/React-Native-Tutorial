import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import ScrollSection from '../components/ScrollSection.js'
import SearchInput from '../components/SearchInput.js'

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {searching: false, ingredientsInput: ''};
		this.recipes = this.recipes.bind(this);
		this.onChange = this.onChange.bind(this);
		this.searchPressed = this.searchPressed.bind(this);
	}

	searchPressed(){
		//console.log('clicked')
		this.setState({searching: true});
		console.log('props', this.props.fetchRecipes.toString())
		this.props.fetchRecipes(this.state.ingredientsInput)
			.then(() => this.setState({searching: false}))
	}

	recipes(){
		//change objects to array of objects
		return Object.keys(this.props.searchedRecipes).map(
			key => this.props.searchedRecipes[key]
		)
	}

	onChange(ingredientsInput){
		this.setState({ingredientsInput})
	}

	render(){
		return <View style={styles.scene}>

			<SearchInput ingredientsInput={this.state.ingredientsInput}
									 onChange={this.onChange}
									 searchPressed={this.searchPressed}/>

			<ScrollSection recipes={this.recipes} 
											searchingStatus={this.state.searching}/>

			{this.state.searching ? <Text>Searching ...</Text> : null}
		</View>
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		marginTop: 20
	}
})

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home)