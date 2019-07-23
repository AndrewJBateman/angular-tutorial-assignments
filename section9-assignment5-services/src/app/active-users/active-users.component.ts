import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  //active users string array from users service
  users: string[] = this.usersService.activeUsers;

  constructor (private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
