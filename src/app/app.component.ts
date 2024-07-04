import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {}

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Logout cancelled');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['/login']);
            this.showLogoutSuccess();
          }
        }
      ]
    });

    await alert.present();
  }

  async showLogoutSuccess() {
    const alert = await this.alertController.create({
      header: 'Logged Out',
      message: 'You have been successfully logged out.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
