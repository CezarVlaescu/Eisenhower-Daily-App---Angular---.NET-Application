import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

// directives

import { EmailCheckDirective } from './directives/email-check.directive';
import { PasswordCheckDirective } from './directives/password-check.directive';

// forms

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmailCheckDirective,
    PasswordCheckDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
