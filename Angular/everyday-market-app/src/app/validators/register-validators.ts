import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator: country must be Canada
export function canadaOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value === 'Canada' ? null : { canadaOnly: true };
    };
}
