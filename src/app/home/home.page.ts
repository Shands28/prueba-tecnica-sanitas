import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgOptimizedImage,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatSlideToggleModule,
    MatIconModule
  ],
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
