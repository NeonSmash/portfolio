import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    emailjs.init('C0lfsqOQaZyfc_1VF'); // Replace with your actual public key
  }

  async onSubmit() {
    this.submitted = true;
    this.error = false;
    this.success = false;
    this.errorMessage = '';
    
    if (this.contactForm.valid) {
      try {
        const response = await emailjs.send(
          'service_264j6as',
          'template_8xxf4bf',
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
            to_email: 'beleczky.feri@gmail.com'
          }
        );
        
        if (response.status === 200) {
          this.success = true;
          setTimeout(() => {
            this.contactForm.reset();
            this.submitted = false;
            this.success = false;
          }, 3000);
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        this.error = true;
        this.errorMessage = 'Failed to send message. Please try again later.';
      }
    } else {
      this.error = true;
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }

  get f() {
    return this.contactForm.controls;
  }
} 