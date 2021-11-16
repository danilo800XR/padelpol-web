import { SessionStorageService } from './../../../core/services/session-storage.service';
import { LoginApiResponse } from './../../interfaces/login-api-response';
import { SweetalertService } from './../../../core/services/sweetalert.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';

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

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalert: SweetalertService,
    private  sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    console.log(this.loginForm.value);
    const params = this.loginForm.value;
    this.authApiService.login({
      password: params.password,
      email: params.mail
    }).subscribe({
      next: res =>{ 
        this.sessionStorage.setItem("token", res.access_token);
        
    },
      error : err => {
        this.sweetalert.showApiErrors(err);
      }
  }
    )
  }

}
