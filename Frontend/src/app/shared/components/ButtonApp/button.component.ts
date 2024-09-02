import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TButtonObject } from '../../types/SharedTypes';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button!: TButtonObject;
  @Output() buttonClicked = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onClick() {
    if(this.button.name === "Logout"){
      this.authService.signOut();
      this.router.navigate(['/login']);
    }
    else{
      this.buttonClicked.emit();
    }
  }
}
