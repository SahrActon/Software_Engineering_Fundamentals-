import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('serverElement') element: {type: string, name: string, content: string };

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges() {
    console.log('Onchanges called');
  }

  ngOnInit() {
    console.log('ngOnIt called');
  }

}
