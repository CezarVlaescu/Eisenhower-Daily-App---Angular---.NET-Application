import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/auth/user.service';
import { TUserData } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public userData!: TUserData | null;

  constructor(
    private userService: UserService,
  ) {
    
  }
  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData() {
    this.userService.getUserById().subscribe({
      next: (data: TUserData | null) => {
        this.userData = data;
      },
      error: (err: Error) => {
        console.error(err);
      }
    })

  }
}
