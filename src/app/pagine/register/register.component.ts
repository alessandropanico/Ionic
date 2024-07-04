import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.authService.isLoggedIn()) {
      alert('You must log out before registering a new user.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (this.authService.register(this.username, this.password)) {
      alert('Registration successful. You are now logged in.');
      this.router.navigate(['/special']);
    } else {
      alert('Registration failed. Username already exists.');
    }
  }
}
