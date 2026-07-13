import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  selectedMethod = '';
  depositPercent = 30;
  totalAmount = 3800000;
  depositAmount = this.totalAmount * this.depositPercent / 100;

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }

  selectMethod(method: string) {
    this.selectedMethod = method;
  }
}
