import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="policy-page">
      <div class="policy-page__banner">
        <div class="container-custom">
          <h1>Chính sách</h1>
          <p>Minh bạch trong từng cam kết với khách hàng</p>
        </div>
      </div>

      <div class="container-custom policy-page__content">
        @for (item of policies; track item.title) {
          <div class="policy-section">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        }

        <div class="policy-cta">
          <p>Cần giải thích thêm về một chính sách cụ thể?</p>
          <a routerLink="/contact" class="btn-primary-custom">Liên hệ Ký Ức Studio →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .policy-page__banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: var(--space-4xl) 0;
      text-align: center;
    }
    .policy-page__banner h1 {
      color: var(--color-text-primary);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-sm);
    }
    .policy-page__banner p {
      color: var(--color-text-light);
      font-size: var(--text-lg);
    }
    .policy-page__content {
      padding: var(--space-5xl) 0;
      max-width: 800px;
      margin: 0 auto;
    }
    .policy-section {
      padding-bottom: var(--space-2xl);
      margin-bottom: var(--space-2xl);
      border-bottom: 1px solid var(--color-border-light);
    }
    .policy-section:last-of-type {
      border-bottom: none;
    }
    .policy-section h3 {
      font-size: var(--text-xl);
      color: var(--color-text-primary);
      margin-bottom: var(--space-sm);
    }
    .policy-section p {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
    .policy-cta {
      text-align: center;
      margin-top: var(--space-3xl);
    }
    .policy-cta p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-lg);
    }
  `]
})
export class PolicyComponent {
  policies = [
    {
      title: 'Chính sách bảo mật',
      desc: 'Ký Ức Studio cam kết bảo mật thông tin cá nhân và hình ảnh của khách hàng, chỉ sử dụng cho mục đích liên hệ tư vấn, đặt lịch và cung cấp dịch vụ chụp ảnh — không chia sẻ cho bên thứ ba khi chưa có sự đồng ý.'
    },
    {
      title: 'Điều khoản sử dụng',
      desc: 'Khi đặt lịch qua website, khách hàng đồng ý cung cấp thông tin chính xác để ekip liên hệ xác nhận lịch chụp. Ký Ức Studio có quyền từ chối hoặc dời lịch trong trường hợp thông tin không hợp lệ.'
    },
    {
      title: 'Chính sách đổi trả',
      desc: 'Đối với các gói dịch vụ đã đặt cọc, khách hàng có thể đổi lịch chụp trước tối thiểu 48 giờ. Trường hợp huỷ lịch trong vòng 24 giờ trước giờ chụp, khoản đặt cọc sẽ không được hoàn lại.'
    },
    {
      title: 'Phương thức thanh toán',
      desc: 'Ký Ức Studio hỗ trợ thanh toán bằng tiền mặt, chuyển khoản ngân hàng hoặc ví điện tử. Khách hàng có thể đặt cọc trước hoặc thanh toán toàn bộ sau khi nhận ảnh thành phẩm, tuỳ theo từng gói dịch vụ.'
    },
    {
      title: 'Giải quyết khiếu nại',
      desc: 'Mọi phản hồi, khiếu nại về chất lượng dịch vụ xin gửi qua hotline hoặc trang Liên hệ. Ký Ức Studio cam kết phản hồi trong vòng 24 giờ làm việc.'
    }
  ];
}
