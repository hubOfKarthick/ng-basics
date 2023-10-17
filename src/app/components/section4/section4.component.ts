import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppSandbox } from 'src/app/sandbox/app.sandbox';
import { AuthService } from 'src/app/services/auth.service';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styles: [
  ]
})
export class Section4Component {
  loginForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  login() {
    this.isSubmitted = true;
    this.authService.validateUserSession(
      this.loginForm.value.email,
      this.loginForm.value.password,
    ).subscribe((res) => {
      console.log(res);
    })
  }

}
