import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import {LandingComponent} from "./landing/landing/landing.component";
import {LandingModule} from "./landing/landing.module";


const appRoutes: Routes = [
  { path: 'landing/:action', component: LandingComponent },
  //{ path: '', component: LandingComponent},
  { path: '**', redirectTo: '/landing/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
