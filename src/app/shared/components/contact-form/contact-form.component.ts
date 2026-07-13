import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formData = {
    name: '',
    phone: '',
    concept: '',
    idea: '',
    location: '',
    note: ''
  };

  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.formData);
      // Reset after 3 seconds
      setTimeout(() => {
        this.submitted = false;
        form.resetForm();
      }, 3000);
    }
  }
}
