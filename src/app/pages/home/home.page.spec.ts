import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePage} from './home.page';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        MatSlideToggleModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require a valid email', () => {
    component.login.setValue({
      email: 'invalid',
      password: 'password',
      remember: false
    })
    expect(component.login.get('email')?.valid).toBeFalse()
    expect(component.login.valid).toBeFalse()
    component.login.setValue({
      email: 'valid@valid.com',
      password: 'password',
      remember: false
    })
    expect(component.login.get('email')?.valid).toBeTruthy()
    expect(component.login.valid).toBeTruthy()
  })

  it('should require a valid password', () => {
    component.login.setValue({
      email: 'valid@valid.com',
      password: 'pass',
      remember: false
    })
    expect(component.login.get('password')?.valid).toBeFalse()
    expect(component.login.valid).toBeFalse()
    component.login.setValue({
      email: 'valid@valid.com',
      password: 'password',
      remember: false
    })
    expect(component.login.get('password')?.valid).toBeTruthy()
    expect(component.login.valid).toBeTruthy()
  })
});
