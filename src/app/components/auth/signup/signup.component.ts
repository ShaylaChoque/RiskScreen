import { Component, NgModule } from '@angular/core';
//Angular
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
//Service
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) { }
  
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.userService.signup(this.username, this.password).subscribe(
      () => {
        console.log("Registration successful");
        this.router.navigate(['/login']);
      },
      error => {
        console.log("Registration failed", error);
      }
    );
  }
}