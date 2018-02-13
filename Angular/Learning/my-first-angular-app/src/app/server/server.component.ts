/* Export allows us to export the class and use it in other parts of the project */


//adding decorators
import {Component} from '@angular/core'

/**
 Decorators are specials features of type script.
 This enhances your class, enhance elements
 */
@Component({
    selector:'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent {
  serverID: number = Math.random() ;
  serverStatus:string = "offline";

  getServerStatus(){
    return this.serverStatus;
  }
}
