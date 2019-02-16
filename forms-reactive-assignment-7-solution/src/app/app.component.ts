import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataForm: FormGroup;
  listStatus = [
    'Stable',
    'Critical',
    'Finished'
  ]
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.dataForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenNamesPromise.bind(this)),
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
        ],
      ),
      'status': new FormControl('Stable'),
    });
  }

  // Validator
  forbiddenNames(control: FormControl): {[s: string]: boolean} { // Key: value
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenNamesPromise(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.dataForm);
    console.log(this.dataForm.value.projectName)
  }

}
