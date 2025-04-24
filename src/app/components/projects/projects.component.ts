import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
      image: 'assets/images/project-1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work and professional experience.',
      image: 'assets/images/project-2.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'assets/images/project-3.jpg',
      technologies: ['Angular', 'Firebase', 'Material UI'],
      link: '#'
    }
  ];
} 