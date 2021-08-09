import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activities = ['Dance', 'Drinks', 'Beach volleyball', 'Sleeping'];
  activityHasError = true;
  submitted = false;
  errorMsg = "";
  userModel = new User(
    'Shiv',
    'shiv@gmail.com',
    9999999999,
    'default',
    'default',
    true
  );
  constructor(private _enrollmentService: EnrollmentService) {}
  validateTopic(value: string) {
    // to display an error flag when the val of the select control is default
    if (value === 'default') {
      this.activityHasError = true;
    } else {
      this.activityHasError = false;
    }
  }
  onSubmit() {
    // send this data to server, we need to make use of a service
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log("Success!", data),
      error => this.errorMsg = error.statusText
      // bind error statustext to errorMsg property 
      // error => console.log("Error!", error)
    )
    console.log(this.userModel);
  }
}
