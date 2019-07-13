import { RecipeService } from './recipe.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';

// resolve is an interface that classses can use to become a data provider

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if(recipes.length === 0){
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}