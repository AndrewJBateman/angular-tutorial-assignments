import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


export interface State {
	ingredients: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

const initialState: State = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	],
	editedIngredient: null,
	editedIngredientIndex: -1
};

// The first time the reducer function runs it will receive the initial state
// action alias is ShoppingListActions
export function shoppingListReducer(
	state: State = initialState,
	action: ShoppingListActions.ShoppingListActions
) {
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state, // use spread operator to create a copy of the old state - never modify the existing state
				ingredients: [...state.ingredients, action.payload]
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};

		// override ingredients with a new array
		case ShoppingListActions.UPDATE_INGREDIENT:
			const ingredient = state.ingredients[state.editedIngredientIndex];
			const updatedIngredient = {
				...ingredient, // copy first
				...action.payload // make changes
			};
			const updatedIngredients = [...state.ingredients];

			// replace old ingredient with new ingredient
			updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

			return {
				...state,
				ingredients: updatedIngredients,
				editedIngredientIndex: -1,
				editedIngredient: null
			};

		case ShoppingListActions.DELETE_INGREDIENT:
			return {
				...state,
				ingredients: state.ingredients.filter((ig, igIndex) => {
					return igIndex !== state.editedIngredientIndex;
				}), // filter automatically gives a copy
				editedIngredientIndex: -1,
				editedIngredient: null
			};

		case ShoppingListActions.START_EDIT:
			return {
				...state,
				editedIngredientIndex: action.payload,
				editedIngredient: { ...state.ingredients[action.payload] }
			};

		case ShoppingListActions.STOP_EDIT:
			return {
				...state,
				editedIngredient: null,
				editedIngredientIndex: -1
			};

			default:
				return state;
	}
}
