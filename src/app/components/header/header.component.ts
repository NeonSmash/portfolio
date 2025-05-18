import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  
  menuItems = [
    { name: 'Home', url: '/', icon: 'fas fa-home' },
    { name: 'About', url: '/about', icon: 'fas fa-info-circle' },
    { name: 'Projects', url: '/projects', icon: 'fas fa-cogs' },
    { name: 'Contact', url: '/contact', icon: 'fas fa-envelope' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
} 