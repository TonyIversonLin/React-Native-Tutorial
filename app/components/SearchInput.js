import React, { Component } from 'react'
import {TouchableHighlight, Text, View, StyleSheet, TextInput} from 'react-native'

const SearchInput = ({ingredientsInput, onChange, searchPressed}) => {
	return (
		<View style={styles.searchSection}>
			<TextInput style={styles.searchInput} 
				returnKeyType ='search'
				placeholder ='Ingredients (comma delimited)'
				onChangeText = {onChange}
				value = {ingredientsInput}
			/>
			<TouchableHighlight style={styles.searchButton} onPress={searchPressed}>
				<Text>Fetch Recipe</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
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
	}
});

export default SearchInput;
