import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // Variables here

  // The decorator here allows me to pass data from the parent component to this(child) component
  @Input () even  : number

  constructor() { }

  ngOnInit() {
  }


}
