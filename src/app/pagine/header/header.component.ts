import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: string | null = null;

  constructor(private menuService: MenuService, private authService: AuthService) { }


  toggleMenu() {
    this.menuService.toggleMenu();
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

}
