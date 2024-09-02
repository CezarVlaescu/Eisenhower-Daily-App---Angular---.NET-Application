import { Component, EventEmitter, Output } from '@angular/core';
import { TLoginInput } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {
  @Output() subbmited = new EventEmitter<TLoginInput>();

  email: string = '';
  password: string = '';

  submitForm(value: any, valid: boolean | null) : void {
   if(valid) {
    const loginData: TLoginInput = {
      email: value.email,
      password: value.password
    }
    this.subbmited.emit(loginData);
   }
  }
}
