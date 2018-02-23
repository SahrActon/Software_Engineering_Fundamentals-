import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from "@angular/core";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges  {

  @ViewChild ('serverContentInput') serverContentInput: ElementRef;
  // @Output make the component accessible to the child component
  @Output () serverCreated = new EventEmitter<{serverName: string, serverContent: string}>() ;
  @Output ('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>() ;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onAddServer(serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    console.log(this.serverContentInput);
      this.serverCreated.emit({
          serverName: serverNameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
        });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    console.log(this.serverContentInput);
       this.blueprintCreated.emit({
         serverName: serverNameInput.value,
         serverContent: this.serverContentInput.nativeElement.value
       });
  }

}
