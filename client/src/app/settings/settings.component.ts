import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  userModel: any = {}
  userSettingsForm: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.onInitialize();
  }

  onInitialize() {
    this.userSettingsForm = new FormGroup({
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
