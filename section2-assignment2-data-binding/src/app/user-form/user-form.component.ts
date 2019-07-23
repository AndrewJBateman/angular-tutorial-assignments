import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  isValidInput() {
    return this.username !== '';
  }

  clearInput() {
    this.username = '';
    console.log('Username entry form cleared');
  }

}
