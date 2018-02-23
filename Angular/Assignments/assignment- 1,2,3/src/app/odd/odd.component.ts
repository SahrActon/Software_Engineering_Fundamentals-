import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // Variables here

  // @input allow us to receive data from the parent
  @Input() odd: number;
  constructor() { }

  ngOnInit() {
  }

}
