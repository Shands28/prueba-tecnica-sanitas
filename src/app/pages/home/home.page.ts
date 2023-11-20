import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  login = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    remember: new FormControl(false)
  })

  attemptedLogin: boolean = false;

  logIn(): void {
    if(this.login.valid){
      console.log('OK')
    } else {
      this.login.markAllAsTouched()
      this.attemptedLogin = true;
    }
  }
}
