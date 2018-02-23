// Adding decorators! They allow you to enhance your type script class
import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styleUrls: ['./server.component.css']
})

// Setting the type script class
export class ServerComponent {
  // variable here

  serverId: number = Math.random();
  serverStatus: string = 'offline' ;

  constructor() {
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
  }

    getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
