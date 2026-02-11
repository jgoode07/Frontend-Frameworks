import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { canadaOnlyValidator } from '../../validators/register-validators';

// Regex reference: found on StackOverflow for validating name, phone, and address formats
const NAME_PATTERN = /^[A-Za-z ]+$/;
const PHONE_PATTERN = /^\d{10}$/;
const ADDRESS_PATTERN = /^[A-Za-z0-9 ]+$/;

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  private fb = inject(FormBuilder);

  provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
    'Northwest Territories', 'Nunavut', 'Yukon'
  ];

  countries = ['Canada', 'United States'];

  // Main registration form structure
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(NAME_PATTERN)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
    dateOfBirth: ['', [Validators.required]],
    streetAddress: ['', [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
    province: ['', [Validators.required]],
    country: ['Canada', [Validators.required, canadaOnlyValidator()]],
    acceptTerms: [false, [Validators.requiredTrue]],
  });

  // Helper used by the template to show red borders and messages
  isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }
}
