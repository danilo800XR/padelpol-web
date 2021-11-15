import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({    
    mail: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    console.log(this.loginForm.value);
  }

}
