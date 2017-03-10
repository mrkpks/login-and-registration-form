import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [LandingComponent, RegisterComponent, LoginComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
