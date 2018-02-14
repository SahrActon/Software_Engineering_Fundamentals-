import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  constructor() {
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'bluePrint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onOrangePrintAdded(orangePrintData: { serverName: string, serverContent: string } ) {
    this.serverElements.push({
      type: 'orangePrint' ,
      name: orangePrintData.serverName ,
      content: orangePrintData.serverContent
    });
  }
}
