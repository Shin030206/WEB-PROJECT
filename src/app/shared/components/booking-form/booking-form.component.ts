import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  submitted = false;
  loading = false;
  errorMessage = '';

  bookingData = {
    name: '',
    phone: '',
    concept: '',
    idea: '',
    note: ''
  };

  constructor(public data: DataService, private bookingService: BookingService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.errorMessage = '';
    try {
      this.bookingService.create(this.bookingData);
      this.submitted = true;
    } catch (err) {
      this.errorMessage = err instanceof Error ? err.message : 'Gửi yêu cầu thất bại, vui lòng thử lại';
    } finally {
      this.loading = false;
    }
  }
}
