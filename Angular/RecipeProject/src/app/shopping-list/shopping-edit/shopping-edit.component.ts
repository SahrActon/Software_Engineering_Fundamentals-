import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild ('nameInput') nameInputRef: ElementRef;
  @ViewChild ('amountInput') amountInputRef: ElementRef;

  // Emitting and event
  @Output () ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  onAddItem () {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const  newIngredient = new Ingredient(ingredientName, ingredientAmount);

    // Emitting the new ingredient
    this.ingredientAdded.emit(newIngredient);
  }

  onDeleteItem() {
  }

  onClearItem  () {

  }

  ngOnInit() {
  }

}
