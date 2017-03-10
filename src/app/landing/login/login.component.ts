import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../styles/landing.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onLoginSubmit(){
    console.log('login!');
  }

  ngOnInit() {
  }

}
