import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './components/register-page/register-page.component';

import { ReactiveFormsModule } from '@angular/forms';

// angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
      RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
