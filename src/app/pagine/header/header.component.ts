import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: string | null = null;
  private userSubscription: Subscription | null = null; // Inizializza come null

  constructor(private menuService: MenuService, private authService: AuthService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
