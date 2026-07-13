import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BookingHistory {
  id: string;
  service: string;
  tier: string;
  date: string;
  createdDate: string;
  status: string;
  deposit: number;
  points: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'Nguyễn Thị Hoa',
    phone: '0901 234 567',
    totalPoints: 850
  };

  bookingHistory: BookingHistory[] = [
    { id: 'DH001', service: 'Chân dung', tier: 'Cao Cấp', date: '2026-07-15', createdDate: '2026-06-28', status: 'Đã đặt cọc', deposit: 1140000, points: 0 },
    { id: 'DH002', service: 'Cặp đôi', tier: 'Nâng Cao', date: '2026-06-10', createdDate: '2026-05-20', status: 'Hoàn thành', deposit: 1050000, points: 350 },
    { id: 'DH003', service: 'Gia đình', tier: 'Tiêu Chuẩn', date: '2026-04-05', createdDate: '2026-03-15', status: 'Hoàn thành', deposit: 900000, points: 300 },
    { id: 'DH004', service: 'Chân dung', tier: 'Nâng Cao', date: '2026-03-20', createdDate: '2026-03-01', status: 'Hoàn thành', deposit: 750000, points: 200 },
  ];

  statusStyle(status: string): string {
    const styles: Record<string, string> = {
      'Chờ xác nhận': '#f59e0b',
      'Đã xác nhận': '#3b82f6',
      'Đã đặt cọc': '#8b5cf6',
      'Hoàn thành': '#22c55e',
      'Đã hủy': '#ef4444',
    };
    return styles[status] || '#6b7280';
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }
}
