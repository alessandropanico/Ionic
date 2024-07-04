import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async register(): Promise<void> {
    if (this.authService.isLoggedIn()) {
      const confirmLogout = await this.showConfirmLogout();
      if (!confirmLogout) {
        return; // User cancelled logout
      }
      this.authService.logout(); // Log out if user confirms
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

  private async showConfirmLogout(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'Confirm Logout',
        message: 'You are already logged in. Do you want to log out and register a new user?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'Logout',
            handler: () => resolve(true)
          }
        ]
      });

      await alert.present();
    });
  }
}
