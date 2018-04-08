import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService implements OnInit {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe(
    'Benachin',
    `Gambia. Fry the fish in the vegetable oil until both sides are brown.`,
    'https://www.tvcontinental.tv/wp-content/uploads/2017/01/beef-benachin.jpg',
      [
        new Ingredient('Rice(cups)', 10 ),
        new Ingredient('Fish', 5 ),

      ]),

    new Recipe(
      'Domoda',
      `Domoda is the national dish of Gambia`,
      'https://www.daringgourmet.com/wp-content/uploads/2013/03/Domoda-1-1024x683.jpg',
      [
        new Ingredient('Peanut butter (in grams)', 10),
        new Ingredient('Beef (in kg) ', 12)
      ])
  ];
  constructor(private  shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);

  }

}
