import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  // The input allows us to pass data from outside into this component
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
