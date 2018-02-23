import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // Child component sending data to the parent
  @Output() featureSelected = new EventEmitter<string>();

  // Navigation for the selected header
  onSelectedHeader(clickedHeader:string) {
    this.featureSelected.emit(clickedHeader);
  }

  ngOnInit() {
  }

}
