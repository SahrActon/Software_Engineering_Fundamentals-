import {EventEmitter, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService implements  OnInit {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient [] = [
    new Ingredient('Banana', 19),
    new Ingredient('Tomato', 2),
    new Ingredient('Onion', 20),
    new Ingredient('Garlic', 20),
    new Ingredient('Chicken wings', 20)
  ];

  constructor() {

  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  ngOnInit() {
  }

}
