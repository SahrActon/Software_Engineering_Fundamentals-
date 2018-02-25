import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UserService  {

  activeUsers = ['Thomas', 'Ahmed'];
  inactiveUsers = ['Sev', 'Andrea'];

  constructor(private counterService: CounterService) {

  }

  // Setting a user to inactive
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]); // go to the inactive user array and push the selected user to the active array's list
    this.inactiveUsers.splice(id, 1) ; // then when you take that id i want you  to remove it from the inactive list
    this.counterService.incrementInActiveToActive();

  }

  // Setting a user to in active
  setToInActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

}
