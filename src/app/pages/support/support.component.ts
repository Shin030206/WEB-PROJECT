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
          <p class="section-label support-page__label">— Hỗ trợ —</p>
          <h1>Trung Tâm Hỗ Trợ</h1>
          <p class="support-page__desc">
            Tìm câu trả lời nhanh cho các thắc mắc phổ biến. Không tìm thấy?
            Liên hệ trực tiếp với chúng tôi.
          </p>
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

        <div class="support-links">
          <a routerLink="/policy" class="support-links__card">
            <i class="bi bi-file-text"></i>
            <div>
              <h5>Chính sách hoạt động</h5>
              <p>Quy trình đặt lịch &amp; thanh toán</p>
            </div>
          </a>
          <a routerLink="/terms" class="support-links__card">
            <i class="bi bi-bank"></i>
            <div>
              <h5>Điều khoản &amp; điều kiện</h5>
              <p>Quy trình đặt lịch &amp; thanh toán</p>
            </div>
          </a>
          <a routerLink="/privacy" class="support-links__card">
            <i class="bi bi-shield-check"></i>
            <div>
              <h5>Chính sách bảo mật</h5>
              <p>Quy trình đặt lịch &amp; thanh toán</p>
            </div>
          </a>
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
    .support-page__label {
      justify-content: center;
      color: var(--color-accent-tan);
    }
    .support-page__label::before { display: none; }
    .support-page__banner h1 {
      font-family: var(--font-display);
      color: var(--color-heading-espresso);
      font-size: var(--text-4xl);
      text-transform: uppercase;
      margin-bottom: var(--space-sm);
    }
    .support-page__desc {
      color: var(--color-text-light);
      font-size: var(--text-lg);
      max-width: 600px;
      margin: 0 auto;
    }
    .support-page__content {
      padding: var(--space-5xl) 0;
    }
    .support-faq {
      max-width: 760px;
      margin: 0 auto var(--space-3xl);
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }
    .support-faq__item {
      padding: var(--space-xl);
      background: var(--tint-t5);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-light);
    }
    .support-faq__item h4 {
      font-family: var(--font-display);
      font-size: var(--text-lg);
      color: var(--color-heading-espresso);
      margin-bottom: var(--space-sm);
      padding-bottom: var(--space-sm);
      border-bottom: 1px solid var(--color-border-light);
    }
    .support-faq__item p {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin: 0;
    }
    .support-links {
      max-width: 760px;
      margin: 0 auto var(--space-3xl);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-md);
    }
    .support-links__card {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-lg);
      background: var(--tint-t5);
      border: 1px solid var(--color-border-light);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-fast);
    }
    .support-links__card:hover {
      border-color: var(--color-btn-tan);
      transform: translateY(-2px);
    }
    .support-links__card i {
      font-size: 1.5rem;
      color: var(--color-btn-tan);
    }
    .support-links__card h5 {
      font-size: var(--text-sm);
      color: var(--color-btn-tan);
      margin: 0 0 2px;
    }
    .support-links__card p {
      font-size: var(--text-xs);
      color: var(--color-text-primary);
      font-weight: 600;
      margin: 0;
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
    @media (max-width: 768px) {
      .support-links {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SupportComponent {
  faqs = [
    {
      q: 'Tôi cần đặt lịch trước bao lâu?',
      a: 'Bạn nên đặt lịch trước ít nhất 7-10 ngày để chúng tôi có thời gian chuẩn bị concept, makeup, trang phục và sắp xếp nhiếp ảnh gia phù hợp nhất. Những ngày cuối tuần và lễ thường kín lịch sớm hơn.'
    },
    {
      q: 'Tôi có thể thay đổi ngày hẹn không?',
      a: 'Bạn có thể dời lịch miễn phí nếu thông báo trước ít nhất 48 giờ. Sau khoảng thời gian này, chúng tôi sẽ xem xét từng trường hợp cụ thể để hỗ trợ tốt nhất.'
    },
    {
      q: 'Tôi có thể chọn concept riêng không?',
      a: 'Hoàn toàn được! Đội ngũ sáng tạo sẽ làm việc trực tiếp với bạn để thiết kế concept theo ý tưởng riêng. Bạn chỉ cần chia sẻ hình ảnh tham khảo hoặc mô tả ý tưởng khi đặt lịch.'
    },
    {
      q: 'Bao lâu thì tôi nhận được ảnh hoàn chỉnh?',
      a: 'Thời gian giao ảnh tiêu chuẩn là 5-7 ngày làm việc. Gói Premium: 3-5 ngày. Ảnh gốc (chưa chỉnh sửa) sẽ không được cung cấp.'
    },
    {
      q: 'Ảnh được giao theo hình thức nào?',
      a: 'Ảnh được giao qua link Google Drive bảo mật, bạn có thể tải về và lưu trữ. Link được giữ trong 12 tháng kể từ ngày giao.'
    },
    {
      q: 'Phí cọc là bao nhiêu và thanh toán theo hình thức nào?',
      a: 'Phí cọc là 30% tổng giá trị gói dịch vụ để xác nhận lịch. Các hình thức: chuyển khoản ngân hàng, Momo, VNPay hoặc tiền mặt tại studio khi đến.'
    },
    {
      q: 'Tôi huỷ lịch thì có được hoàn tiền không?',
      a: 'Huỷ lịch trước 24 giờ: hoàn lại 50% cọc. Huỷ trong vòng 24 giờ: không hoàn cọc. Dời lịch miễn phí khi thông báo trước 48 giờ.'
    },
    {
      q: 'Studio có hỗ trợ chụp ngoại cảnh không?',
      a: 'Có! Chúng tôi có nhiều địa điểm outdoor đẹp tại TP.HCM và Hà Nội. Phí di chuyển trong nội thành đã bao gồm trong gói Signature và Premium. Địa điểm ngoài thành phố sẽ thỏa thuận thêm.'
    },
    {
      q: 'Kho trang phục có đa dạng không?',
      a: 'Kho trang phục với 200+ bộ đa phong cách: Áo dài, hiện đại, vintage, bohemian, minimalist... Được cập nhật thường xuyên theo xu hướng mới. Bạn cũng có thể mang trang phục riêng.'
    }
  ];

  constructor(public data: DataService) {}
}
