import * as types from './types.js'
import Api from '../lib/api.js'

export function fetchRecipes(ingredients){
	return (dispatch, getState) => {
		const params = [
			`i=${encodeURIComponent(ingredients)}`,
			'fillIngredients=false',
			'limiteLicense=false',
			'number=20',
			'ranking=1'
		].join('&');
		console.log(`/recipes/findByIngredients?${params}`);
		return Api.get(`/api/?${params}`)
							.then( resp => {
								dispatch(setSearchedRecipes(resp));
							})
							.catch( error => console.log(error))
	}
}

export function setSearchedRecipes(recipes) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes: recipes
	}
}

export function addRecipe(){
	return {
		type: types.ADD_RECIPE,
	}
}