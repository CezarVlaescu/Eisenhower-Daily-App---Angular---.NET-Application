import { Component, Input } from '@angular/core';
import { SharedInput } from 'src/app/shared/types/authType';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {

  @Input() sharedInput = new SharedInput();

  constructor(){}
  
}