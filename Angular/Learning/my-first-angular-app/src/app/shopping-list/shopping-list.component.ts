import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // Variables here
  ingredients: Ingredient [] = [
    new Ingredient('Banana', 19),
    new Ingredient('Tomato', 2),
    new Ingredient('Onion', 20),
    new Ingredient('Garlic', 20),
    new Ingredient('Chicken wings', 20)
  ]; // Creating an array of ingredient
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
  }

}
