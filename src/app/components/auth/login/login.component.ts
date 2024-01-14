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
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) { }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      () => {
        console.log("Authentication successful");
        this.router.navigate(['/provider-table']);
      },
      error => {
        console.log("Authentication failed", error);
      }
    );
  }

}