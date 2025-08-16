import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  activeMenu = 'home';

  menuItems = [
    { key: 'home', label: 'Home', route: 'home' },
    { key: 'services', label: 'Services', route: 'services' },
    { key: 'category', label: 'Categories', route: 'categories' },
    { key: 'charges', label: 'Our Charges', route: 'ourcharges' },
    { key: 'areas', label: 'Operating Areas', route: 'operating-areas' },
    { key: 'aboutUs', label: 'About Us', route: 'aboutus' },
    { key: 'contact', label: 'Contact', route: 'contact' },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('/')[1];
        const match = this.menuItems.find(item => item.route === path);
        this.activeMenu = match ? match.key : 'home';
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveMenu(key: string) {
    this.activeMenu = key;
  }

  handleMobileNavClick(key: string) {
    this.setActiveMenu(key);
    this.isMenuOpen = false; // ✅ Automatically close mobile nav after click
  }
}
