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

	searchPressed(){
		this.props.fetchRecipes('bacon,cucumber,banana');
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
				<TouchableHighlight style={styles.searchButton} onPress={() => this.searchPressed()}>
					<Text>Fetch Recipe</Text>
				</TouchableHighlight>
			</View>
			<ScrollView style={styles.scrollSection}>
				{this.recipes().map(recipe => {
					return <View key={recipe.title}>
						<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
						<Text style={styles.resultText}>{recipe.title}</Text>
					</View>
				})}
			</ScrollView>
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
		padding: 5
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