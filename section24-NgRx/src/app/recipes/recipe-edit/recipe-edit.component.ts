import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode = false;
	recipeForm: FormGroup;

	get ingredientsControls() {
		return (this.recipeForm.get('ingredients') as FormArray).controls;
	}

	constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeService,
		private router: Router,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.editMode = params.id != null;
			this.initForm();
		});
	}

	onSubmit() {
		// const newRecipe = new Recipe(
		//   this.recipeForm.value['name'],
		//   this.recipeForm.value['description'],
		//   this.recipeForm.value['imagePath'],
		//   this.recipeForm.value['ingredients']);
		if (this.editMode) {
			this.recipeService.updateRecipe(this.id, this.recipeForm.value);
		} else {
			this.recipeService.addRecipe(this.recipeForm.value);
		}
		this.onCancel();
	}

	onAddIngredient() {
		( this.recipeForm.get('ingredients') as FormArray).push(
			new FormGroup({
				name: new FormControl(null, Validators.required),
				amount: new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
	}

	onDeleteIngredient(index: number) {
		( this.recipeForm.get('ingredients') as FormArray).removeAt(index);
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	private initForm() {
		let recipeName = '';
		let recipeImagePath = '';
		let recipeDescription = '';
		const recipeIngredients = new FormArray([]);

		if (this.editMode) {
			// const recipe = this.recipeService.getRecipe(this.id);
			this.store.select('recipes').pipe(map(recipeState => {
				return recipeState.recipes.find((recipe, index) => {
					return index === this.id;
				});
			})
			)
			.subscribe(recipe => {
				recipeName = recipe.name;
				recipeImagePath = recipe.imagePath;
				recipeDescription = recipe.description;
				if (recipe.ingredients) {
					for (const ingredient of recipe.ingredients) {
						recipeIngredients.push(
							new FormGroup({
								name: new FormControl(ingredient.name, Validators.required),
								amount: new FormControl(ingredient.amount, [
									Validators.required,
									Validators.pattern(/^[1-9]+[0-9]*$/)
								])
							})
						);
					}
				}
			});

		}

		this.recipeForm = new FormGroup({
			name: new FormControl(recipeName, Validators.required),
			imagePath: new FormControl(recipeImagePath, Validators.required),
			description: new FormControl(recipeDescription, Validators.required),
			ingredients: recipeIngredients
		});
	}
}
