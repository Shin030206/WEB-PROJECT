import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="support-page">
      <div class="support-page__banner">
        <div class="container-custom">
          <h1>Hỗ trợ</h1>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và giải đáp thắc mắc của bạn</p>
        </div>
      </div>

      <div class="container-custom support-page__content">
        <div class="support-faq">
          @for (item of faqs; track item.q) {
            <div class="support-faq__item">
              <h4>{{ item.q }}</h4>
              <p>{{ item.a }}</p>
            </div>
          }
        </div>

        <div class="support-cta">
          <h3>Không tìm thấy câu trả lời bạn cần?</h3>
          <p>Liên hệ trực tiếp với ekip Ký Ức để được tư vấn nhanh nhất.</p>
          <div class="support-cta__actions">
            <a routerLink="/contact" class="btn-primary-custom">Liên hệ ngay →</a>
            <a [href]="'tel:' + data.phoneNumber" class="btn-outline-custom">
              <i class="bi bi-telephone"></i> {{ data.phoneNumber }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .support-page__banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: var(--space-4xl) 0;
      text-align: center;
    }
    .support-page__banner h1 {
      color: var(--color-text-primary);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-sm);
    }
    .support-page__banner p {
      color: var(--color-text-light);
      font-size: var(--text-lg);
    }
    .support-page__content {
      padding: var(--space-5xl) 0;
    }
    .support-faq {
      max-width: 760px;
      margin: 0 auto var(--space-5xl);
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }
    .support-faq__item {
      padding: var(--space-xl);
      background: var(--color-bg-cream);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-light);
    }
    .support-faq__item h4 {
      font-size: var(--text-lg);
      color: var(--color-text-primary);
      margin-bottom: var(--space-sm);
    }
    .support-faq__item p {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      line-height: 1.7;
    }
    .support-cta {
      text-align: center;
      background: var(--color-bg-cream);
      padding: var(--space-3xl);
      border-radius: var(--radius-xl);
      max-width: 700px;
      margin: 0 auto;
    }
    .support-cta h3 {
      font-size: var(--text-2xl);
      margin-bottom: var(--space-sm);
    }
    .support-cta p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-xl);
    }
    .support-cta__actions {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      flex-wrap: wrap;
    }
  `]
})
export class SupportComponent {
  faqs = [
    {
      q: 'Làm sao để đặt lịch chụp ảnh tại Ký Ức Studio?',
      a: 'Bạn có thể đặt lịch trực tiếp trên website qua mục "Đặt lịch", hoặc liên hệ qua Zalo/Messenger/hotline để được tư vấn concept phù hợp trước khi chốt lịch.'
    },
    {
      q: 'Thời gian tư vấn và phản hồi mất bao lâu?',
      a: 'Ekip Ký Ức cam kết liên hệ lại trong vòng 30 phút kể từ khi bạn gửi thông tin đặt lịch hoặc tư vấn.'
    },
    {
      q: 'Tôi có thể đổi lịch hoặc huỷ lịch không?',
      a: 'Bạn có thể đổi lịch trước tối thiểu 48 giờ so với giờ chụp đã đặt. Vui lòng liên hệ hotline hoặc Zalo để được hỗ trợ.'
    },
    {
      q: 'Studio có ở những cơ sở nào?',
      a: 'Ký Ức Studio hiện có 2 cơ sở tại Hà Nội và TP Hồ Chí Minh. Xem chi tiết địa chỉ tại trang Liên hệ.'
    }
  ];

  constructor(public data: DataService) {}
}
