import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = this.fb.group({
    name: [''],
    paddelLevel: [''],
    password: [''],
    passwordConfirmation: [''],
    mail: ['']
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onRegisterSubmit()
  {
    console.log(this.registerForm.value);
  }

}
