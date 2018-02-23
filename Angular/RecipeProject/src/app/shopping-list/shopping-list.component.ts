import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Banana', 3),
    new Ingredient('orange', 5),
    new Ingredient('Mango', 15)
  ];
  constructor() { }

  onIngredientAdded(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
  }

  ngOnInit() {
  }

}
