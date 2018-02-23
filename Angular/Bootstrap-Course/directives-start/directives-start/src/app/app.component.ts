import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*  // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13, 14, 15, 16, 17, 18, 19, 20];
  oddNumbers= [1, 3, 5, 7, 11 , 13, 17, 19 ];
  evenNumbers  = [2, 4, 6, 8, 10, 12];
  onlyOdd = false;*/

  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;

  value = 10;
}
