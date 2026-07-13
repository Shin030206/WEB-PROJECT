import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  template: `
    <section class="contact-page">
      <div class="contact-page__banner">
        <div class="container-custom">
          <h1>Liên hệ</h1>
          <p>Hãy để ekip Ký Ức lắng nghe câu chuyện của bạn</p>
        </div>
      </div>

      <div class="container-custom contact-page__content">
        <div class="contact-info">
          <div class="contact-info__card">
            <i class="bi bi-geo-alt-fill"></i>
            <div>
              <h4>Hà Nội</h4>
              <p>123 Phố Huế, Hai Bà Trưng, Hà Nội</p>
            </div>
          </div>
          <div class="contact-info__card">
            <i class="bi bi-geo-alt-fill"></i>
            <div>
              <h4>TP Hồ Chí Minh</h4>
              <p>456 Nguyễn Trãi, Quận 1, TP Hồ Chí Minh</p>
            </div>
          </div>
          <div class="contact-info__card">
            <i class="bi bi-telephone-fill"></i>
            <div>
              <h4>Điện thoại</h4>
              <p><a href="tel:{{ data.phoneNumber }}">{{ data.phoneNumber }}</a></p>
            </div>
          </div>
          <div class="contact-info__card">
            <i class="bi bi-envelope-fill"></i>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:hello@kyucstudio.vn">hello&#64;kyucstudio.vn</a></p>
            </div>
          </div>
        </div>
      </div>

      <app-contact-form></app-contact-form>
    </section>
  `,
  styles: [`
    .contact-page__banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: var(--space-4xl) 0;
      text-align: center;
    }
    .contact-page__banner h1 {
      color: var(--color-text-primary);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-sm);
    }
    .contact-page__banner p {
      color: var(--color-text-light);
      font-size: var(--text-lg);
    }
    .contact-page__content {
      padding: var(--space-4xl) 0 0;
    }
    .contact-info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      margin-bottom: var(--space-3xl);
    }
    .contact-info__card {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      padding: var(--space-xl);
      background: var(--color-bg-warm);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-light);
    }
    .contact-info__card i {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin-top: 2px;
    }
    .contact-info__card h4 {
      font-size: var(--text-base);
      margin-bottom: 2px;
    }
    .contact-info__card p {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      margin: 0;
    }
    .contact-info__card p a {
      color: inherit;
    }
    .contact-info__card p a:hover {
      color: var(--color-primary);
    }
    @media (max-width: 992px) {
      .contact-info { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 576px) {
      .contact-info { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  constructor(public data: DataService) {}
}
