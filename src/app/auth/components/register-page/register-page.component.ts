import { SweetalertService } from './../../../core/services/sweetalert.service';
import { AuthApiService } from './../../services/auth-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PaddelLevelApiResponse } from '../../interfaces/paddel-level-api-response';
import { map, Observable } from 'rxjs';

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

  paddelLevels!: PaddelLevelApiResponse[];
  filteredPaddelLevels!: Observable<PaddelLevelApiResponse[]>;
  
  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalert: SweetalertService) { }

  ngOnInit(): void {
    this.authApiService.getPaddleLevels().subscribe(res => {
      this.paddelLevels = res;
      this.registerForm.controls['paddelLevel'].setValue('');
    });

    this.filteredPaddelLevels = this.registerForm.controls['paddelLevel'].valueChanges.pipe(
      map((value : string | PaddelLevelApiResponse) => {
        // console.log(value);
        if (typeof value != 'string') 
          value = value.name;
        return this.filter(value);
      })
    );
  };

  public displayFn(paddelLevel: PaddelLevelApiResponse): string {
    return paddelLevel && paddelLevel.name ? paddelLevel.name : '';
  }

  private filter(value: string): PaddelLevelApiResponse[]{
    const filtered = this.paddelLevels.filter(pl => pl.name.toLowerCase().includes(value.toLowerCase()));
    return filtered;
  }

  onRegisterSubmit() {
    const params = this.registerForm.value;
    if (typeof params.paddelLevel == 'string') return this.sweetalert.warning("El nivel de padel es obligatorio", "Seleccione nivel propuesto") ;
    if (params.password != params.passwordConfirmation) return this.sweetalert.warning("La contraseña debe coincidir");
    return this.sweetalert.success("Eres un máquina");

  }

}
