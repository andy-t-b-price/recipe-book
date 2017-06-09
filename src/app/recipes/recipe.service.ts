import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

     private recipes: Recipe[] = [
        new Recipe(
            'A Burger',
            'This is simply a test',
            'http://www.bk.com/sites/default/files/VeggieBurger_thumb.png',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Bread Bun', 2),
                new Ingredient('lettuce', 7)
            ]),
        new Recipe(
            'A Sandwich',
            'This is simply a test',
            'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            [
                new Ingredient('Ham', 4),
                new Ingredient('Mustard', 2),
                new Ingredient('Bread', 3)
            ])
  ];  


constructor(private shoppingListService: ShoppingListService) {

}

  getRecipes() {
      return this.recipes.slice();
  }  


  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}