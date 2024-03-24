import { Component, Input } from '@angular/core';
import { SharedInput } from '../../types/registerType';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {

  @Input() sharedInput = new SharedInput();

  constructor(){}
  
}
