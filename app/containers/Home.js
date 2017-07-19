import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'

const {
	Text,
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet
} = ReactNative

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {searching: false, ingredientsInput: ''};
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

	render(){
		return <View style={styles.scene}>

			<View style={styles.searchSection}>

				<TextInput style={styles.searchInput} 
					returnKeyType ='search'
					placeholder ='Ingredients (comma delimited)'
					onChangeText = { ingredientsInput => this.setState({ingredientsInput})}
					value = {this.state.ingredientsInput}
				/>
				<TouchableHighlight style={styles.searchButton} onPress={() => this.searchPressed()}>
					<Text>Fetch Recipe</Text>
				</TouchableHighlight>
			</View>

			<ScrollView style={styles.scrollSection}>
				{!this.state.searching && this.recipes().map(recipe => {
					return <View key={recipe.title}>
						<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
						<Text style={styles.resultText}>{recipe.title}</Text>
					</View>
				})}
			</ScrollView>
			{this.state.searching ? <Text>Searching ...</Text> : null}
		</View>
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		marginTop: 20
	},
	searchSection: {
		height: 30,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		padding: 5,
		flexDirection: 'row'
	},
	searchInput: {
		flex: 0.7
	},
	searchButton: {
		flex: 0.3
	},
	scrollSection: {
		flex: 0.8
	},
	resultImage: {
		height: 150
	},
	resultText: {
		backgroundColor: '#000',
		color: '#FFF',
		height: 20,
	}
})

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home)