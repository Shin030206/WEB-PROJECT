import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  constructor(public data: DataService) {}

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }
}
