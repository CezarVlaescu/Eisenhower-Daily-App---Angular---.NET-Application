import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[password-check]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: PasswordCheckDirective,
    multi: true
  }]
})
export class PasswordCheckDirective implements Validator {
  
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}


  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) { // if we don't have a value we set it as valid 
      this.setBorderStyle('none');
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /\d/.test(control.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);

    const valid = hasUpperCase && hasNumber && hasSpecialChar;

    !valid ? this.setBorderStyle('2px solid red') : this.setBorderStyle('none');

    return valid ? null : { invalidPassword: true };
  }

  private setBorderStyle = (style: string) => this.renderer.setStyle(this.elementRef.nativeElement, 'border', style);
  
  @HostListener('input', ['$event.target.value']) onInput = (value: string) => this.validate({value} as AbstractControl)
}
