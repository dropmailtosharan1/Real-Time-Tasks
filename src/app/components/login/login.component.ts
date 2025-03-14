import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  registrationForm: FormGroup;
  formBuilder = inject(FormBuilder);
  submitted = false;
  showPassword =  false;

  constructor() {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: this.passwordMatchValidation,
      }
    );
  }

  ngOnInit(): void {}

  passwordMatchValidation(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return {
        mismatch: true,
      };
    } else {
      return null;
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onCheckboxChange() {
    this.registrationForm.get('acceptTerms')?.updateValueAndValidity(); // ✅ Update validation state on change
  }

  onSubmit() {
    console.log('Form Submitted:', this.registrationForm.value);
    this.submitted = true;
  }

  reset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
