import { Component } from '@angular/core';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';
import { JourneyStepsComponent } from '../../shared/components/journey-steps/journey-steps.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BookingFormComponent, JourneyStepsComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {}
