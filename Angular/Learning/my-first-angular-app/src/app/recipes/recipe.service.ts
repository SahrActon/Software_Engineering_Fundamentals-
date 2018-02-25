import {EventEmitter, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService implements OnInit {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe(
    'Benachin',
    `Gambia. Fry the fish in the vegetable oil until both sides are brown.`,
    'https://www.tvcontinental.tv/wp-content/uploads/2017/01/beef-benachin.jpg'),
    new Recipe(
      'Domoda',
      `Domoda is the national dish of Gambia`,
      'https://www.daringgourmet.com/wp-content/uploads/2013/03/Domoda-1-1024x683.jpg'),
    new Recipe(
      'Fufu',
      `Fufu is a staple food common in many countries in Africa such as Ghana and Nigeria.`,
      'https://buzzghana.com/wp-content/uploads/2014/08/fish-stew-fufu-1024x624.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
