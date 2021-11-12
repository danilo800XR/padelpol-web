import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    paddelLevel: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
    mail: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterSubmit()
  {
    console.log(this.registerForm.value);
  }

}
