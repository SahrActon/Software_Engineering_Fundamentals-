import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // // The input allows us to pass data from outside into this component
  @Input () number: number ;
  constructor() { }

  ngOnInit() {
  }

}
