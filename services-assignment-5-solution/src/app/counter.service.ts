import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  inactiveCount: number = 0;
  activeCount: number = 0;

  constructor() { }

  // function to count the no of changes from active to inactive users. 
  userCountActiveToInactive() {
    this.inactiveCount++;
    console.log('Active to Inactive changes : ' + this.inactiveCount);
  }

  // function to count the no of changes from inactive to active users.
  userCountInactiveToActive() {
    this.activeCount++;
    console.log('Inactive to Active changes : ' + this.activeCount);
  }

}
