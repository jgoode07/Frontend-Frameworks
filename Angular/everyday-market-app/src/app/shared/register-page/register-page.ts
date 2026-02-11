import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  private fb = inject(FormBuilder);

  // Main registration form structure
  registrationForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    dateOfBirth: [''],
    streetAddress: [''],
    province: [''],
    country: ['Canada'],
    acceptTerms: [false],
  });
}
