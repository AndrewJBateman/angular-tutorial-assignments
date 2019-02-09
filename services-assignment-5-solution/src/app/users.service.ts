import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  // function to change active user to inactive: 
  // add to inactive user array, remove from active aray, 
  // increment the count of active to inactive users 
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.userCountActiveToInactive();
  }

  // function to change inactive user to active: 
  // add tonactive user array, remove from inactive aray, 
  // increment the count of inactive to active users
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.userCountInactiveToActive();
  }

}
