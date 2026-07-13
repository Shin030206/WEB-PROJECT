import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-support-float',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="support-float">
      <a
        [href]="'https://zalo.me/' + data.phoneNumber"
        target="_blank"
        class="support-float__pill support-float__pill--light"
      >
        <i class="bi bi-chat-dots"></i> Nhắn tin
      </a>
      <a
        [href]="'tel:' + data.phoneNumber"
        class="support-float__pill support-float__pill--light"
      >
        <i class="bi bi-telephone"></i> Liên hệ
      </a>
      <a routerLink="/booking" class="support-float__pill support-float__pill--dark">
        <i class="bi bi-calendar3"></i> Đặt lịch
      </a>
    </div>
  `,
  styles: [`
    .support-float {
      position: fixed;
      bottom: var(--space-xl);
      right: var(--space-xl);
      z-index: var(--z-sticky);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: var(--space-sm);
    }

    .support-float__pill {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: 12px 22px;
      border-radius: var(--radius-full);
      text-decoration: none;
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: 500;
      white-space: nowrap;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

      i { font-size: 1rem; }

      &:hover {
        transform: translateY(-2px);
      }

      &--light {
        background: var(--tint-t4);
        color: var(--neutral-d-grey);

        &:hover { box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18); }
      }

      &--dark {
        background: var(--shade-s2);
        color: var(--neutral-white);

        &:hover { box-shadow: 0 6px 20px rgba(184, 107, 0, 0.4); }
      }
    }

    @media (max-width: 576px) {
      .support-float__pill span,
      .support-float__pill {
        font-size: var(--text-xs);
        padding: 10px 16px;
      }
    }
  `]
})
export class SupportFloatComponent {
  constructor(public data: DataService) {}
}
