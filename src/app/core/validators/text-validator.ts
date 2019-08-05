import { AbstractControl, ValidationErrors } from "@angular/forms";

const requiredValidation = { required: 'This field is required'};

export class TextValidators {

    static required(control: AbstractControl): ValidationErrors | null {
        if (!control.value) { return requiredValidation; }
        return control.value.trim().length > 0 ? null : requiredValidation;
    }

}
