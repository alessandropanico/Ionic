import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      const alert = await this.alertController.create({
        header: 'Access Denied',
        message: 'You must register to access this page.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.router.navigate(['/home']);
            }
          },
          {
            text: 'Register',
            handler: () => {
              this.router.navigate(['/register']);
            }
          }
        ]
      });

      await alert.present();
      return false;
    }
  }
}
