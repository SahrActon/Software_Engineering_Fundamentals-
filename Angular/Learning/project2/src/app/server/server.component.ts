import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})
export class ServerComponent {

  serverId = Math.random() ;
  serverStatus = 'Online' ;

  constructor () {
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getColour() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
