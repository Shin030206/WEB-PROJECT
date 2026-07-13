import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  submitted = false;
  minDate = new Date().toISOString().split('T')[0];

  bookingData = {
    service: '',
    tier: '',
    date: '',
    name: '',
    phone: '',
    location: '',
    addons: [] as string[],
    note: ''
  };

  constructor(public data: DataService) {}

  get selectedService() {
    return this.data.pricingCategories.find(c => c.id === this.bookingData.service);
  }

  toggleAddon(name: string, checked: boolean) {
    if (checked) {
      if (!this.bookingData.addons.includes(name)) {
        this.bookingData.addons.push(name);
      }
    } else {
      this.bookingData.addons = this.bookingData.addons.filter(a => a !== name);
    }
  }

  formatSvPrice(price: number): string {
    return price.toLocaleString('vi-VN');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Booking:', this.bookingData);
    }
  }
}
