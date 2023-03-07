import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  userProfileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    skillLevel: new FormControl(''),
  });

  onSubmit() {
    // TODO
  }
}
