import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // adding an array of recipes
  recipes: Recipe [] = [new Recipe(
    'Benachin',
    `Gambia. Fry the fish in the vegetable oil until both sides are brown.`,
    'https://www.tvcontinental.tv/wp-content/uploads/2017/01/beef-benachin.jpg'),
    new Recipe(
      'Fufu',
      `Fufu is a staple food common in many countries in Africa such as Ghana and Nigeria.`,
      'https://buzzghana.com/wp-content/uploads/2014/08/fish-stew-fufu-1024x624.jpg')
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
