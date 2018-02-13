import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationSatus = "No server was created!";
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      },2000);
  }

  ngOnInit() {
  }

  // to the triggered within the template
  onCreateServer(){
  this.serverCreationSatus = "Server was created"
  }

  onUpdateServerName(event:any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
