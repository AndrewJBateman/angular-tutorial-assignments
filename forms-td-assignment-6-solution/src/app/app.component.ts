import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  subscriptionTypes = [
    'Basic',
    'Advanced',
    'Pro'
  ];
  defaultOption = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subscriptionType: '',
    password: '',
  }

  onSubmit() {
    console.log(this.signupForm.value);

    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscriptionType = this.defaultOption;
    this.user.password = this.signupForm.value.password;
    // this.signupForm.reset();
  }
}
