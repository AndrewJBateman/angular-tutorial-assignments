import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	]
};

// The first time the reducer function runs it will receive the initial state
export function shoppingListReducer(
	state = initialState,
	action: ShoppingListActions.AddIngredient
) {
	switch (action.type) {
		case 'ADD_INGREDIENT':
			return {
				...state, // creates a copy of the old state - never modify the existing state
				ingredients: [...state.ingredients, action.payload]
			};
			default:
				return state;
	}
}
