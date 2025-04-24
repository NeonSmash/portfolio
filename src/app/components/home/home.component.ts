import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    { 
      title: 'Responsive Design', 
      description: 'Our websites look great on all devices, from mobile phones to desktop computers.',
      icon: 'fas fa-mobile-alt'
    },
    { 
      title: 'Modern Technology', 
      description: 'Built with the latest web technologies for optimal performance and security.',
      icon: 'fas fa-code'
    },
    { 
      title: 'SEO Optimized', 
      description: 'Designed to rank well in search engines and attract more visitors to your site.',
      icon: 'fas fa-search'
    },
    { 
      title: 'Fast Loading', 
      description: 'Optimized for speed to provide the best user experience for your visitors.',
      icon: 'fas fa-tachometer-alt'
    }
  ];

  testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, Tech Solutions',
      image: 'assets/images/testimonial-1.jpg',
      text: 'Working with this team was a fantastic experience. They delivered our project on time and exceeded our expectations.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Brands',
      image: 'assets/images/testimonial-2.jpg',
      text: 'The website they created for us has significantly increased our online presence and customer engagement.'
    },
    {
      name: 'Michael Brown',
      position: 'Founder, Startup Hub',
      image: 'assets/images/testimonial-3.jpg',
      text: 'Professional, responsive, and incredibly skilled. I highly recommend their services to anyone looking for a quality web solution.'
    }
  ];
} 