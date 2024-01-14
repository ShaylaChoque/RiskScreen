import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router: Router) { }

  isOnLoginOrSignupPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }

  navigateToProviders() {
    if (!this.isOnLoginOrSignupPage()) {
      this.router.navigate(['/providers']);
    }
  }
  
  navigateToLogin() {
    if (!this.isOnLoginOrSignupPage()) {
      this.router.navigate(['/login']);
    }
  }
}
