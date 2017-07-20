import React, { Component } from 'react'
import {ScrollView, Image, Text, View, StyleSheet} from 'react-native'

const ScrollSection = ({recipes, searchingStatus}) => {
	return (
		<ScrollView style={styles.scrollSection}>
			{!searchingStatus && recipes().map(recipe => {
				return <View key={recipe.title}>
					<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
					<Text style={styles.resultText}>{recipe.title}</Text>
				</View>
			})}
		</ScrollView>		
	)
}

const styles = StyleSheet.create({
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

export default ScrollSection;