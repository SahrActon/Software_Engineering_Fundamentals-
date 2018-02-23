import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Code for assignment 2
  userName = '';

  onclearUserName() {
    this.userName = '';
  }

  // Code for assignment 3
  showConttent = false;
  clickCounter = []
  counter = 0;
  content = 'I love basketball';


  onClickCounter() {
    this.showConttent = !this.showConttent;
    this.clickCounter.push(this.clickCounter.length + 1);
  }

  // Code for assignment 3 redo
  showContent_b = false;
  logClicks = [] ;

  onToggle() {
    this.showContent_b = !this.showConttent;
    this.logClicks.push(this.logClicks.length + 1 );
  }

  // Code for assignment 4
  // variables here
  oddNumbers: number [] = [];
  evenNumbers: number [] = [];

  onInterValFired(firedNumber: number){
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }

}
