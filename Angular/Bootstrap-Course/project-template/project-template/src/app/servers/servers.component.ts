import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Variables here

  allowNewServer = false;
  serverCreation = 'No server was created';
  serverName = 'Test Server '
  serverCreated= false;

  // Creating an array of servers here
  servers = ['Test server 1', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
       },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'Server was created and the name is : ' + this.serverName;
  }
  onUpdateServerName(eventListener: Event) {
    this.serverName = (<HTMLInputElement>eventListener.target).value;
  }



}
