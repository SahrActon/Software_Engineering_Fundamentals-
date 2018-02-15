import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input ('serverElement') element: {type: string, name: string, content: string }
  @Input() name: string;

  constructor() {
    console.log("Hello i'm the constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Hello i'm ngOnChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log("Hello i'm the ngOnInit");
  }

}
