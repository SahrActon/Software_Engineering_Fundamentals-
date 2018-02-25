import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  // Variables here

  // Creating an array of ingredient
  ingredients: Ingredient [];

  constructor(private shoppingLisService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingLisService.getIngredients();
  }

}
