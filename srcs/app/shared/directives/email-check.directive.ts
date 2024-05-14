import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[email-check]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailCheckDirective),
    multi: true
  }]
})
export class EmailCheckDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail : true };
  }
}
