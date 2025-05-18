import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
<<<<<<< HEAD
    { name: 'Facebook', url: 'https://www.facebook.com/beleczky.ferenc', icon: 'fab fa-facebook' },
    { name: 'Github', url: 'https://github.com/NeonSmash', icon: 'fab fa-github' },
    { name: 'Instagram', url: 'https://www.instagram.com/extravagans_gepsarkanyok/', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/beleczky-ferenc/', icon: 'fab fa-linkedin' }
=======
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook' },
    { name: 'Github', url: '#', icon: 'fab fa-github' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' }
>>>>>>> cc37636161d3a6d1a63f11f75b9ad7fbae13b58c
  ];

  footerLinks = [
    { name: 'About Me', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ];
} 