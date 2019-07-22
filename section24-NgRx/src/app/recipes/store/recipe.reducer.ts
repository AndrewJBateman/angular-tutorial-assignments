import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
	recipes: Recipe[];
}

const initialState = {
	recipes: []
};

export function recipeReducer(
	state = initialState,
	action: RecipesActions.RecipesActions
) {
	switch (action.type) {
		case RecipesActions.SET_RECIPES:
			return {
				...state,
				recipes: [...action.payload]
			};

		case RecipesActions.ADD_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};

		case RecipesActions.UPDATE_RECIPE:
			// overwrite old recipe with updated recipe
			const updatedRecipe = {
				...state.recipes[action.payload.index],
				...action.payload.newRecipe
			};

			const updatedRecipes = [...state.recipes];
			updatedRecipes[action.payload.index] = updatedRecipe; // select the right recipe using the index

			return {
				...state,
				recipes: updatedRecipes
			};

		case RecipesActions.DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter((recipe, index) => {
					return index !== action.payload;
				})
			};

		default:
			return state;
	}
}
