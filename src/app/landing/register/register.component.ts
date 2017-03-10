import { Component, OnInit } from '@angular/core';
import { User } from  '../../models/user.interface';

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../styles/landing.scss']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }

  checkPassword(): boolean {
    let isStrong: boolean = UPPERCASE_REGEX.test(this.user.password) && LOWERCASE_REGEX.test(this.user.password) && NUMBER_REGEX.test(this.user.password);
    console.log(isStrong);
    console.log(this.user.password);
    return isStrong;
  }

  validatePassword(): boolean {
    if(this.user.password === this.user.confirmPassword)
      return true;
    else
      return false;
  }

  // onRegisterSubmit(){
  //   console.log('register!');
  // }
}
