import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-page">
      <div class="about-page__banner">
        <div class="container-custom">
          <h1>Giới thiệu</h1>
          <p>Câu chuyện của Ký Ức Studio</p>
        </div>
      </div>

      <div class="container-custom about-page__content">
        <!-- Story -->
        <div class="about-section">
          <h2>"Nơi mỗi phụ nữ Việt tỏa sáng"</h2>
          <div class="about-story">
            <p>Trong thời đại số hóa bùng nổ, chúng ta rất dễ dàng lưu trữ hàng ngàn bức ảnh trong chiếc điện thoại di động, nhưng phần lớn những khoảnh khắc đó thường trôi qua rất nhanh và thiếu đi chiều sâu cảm xúc.</p>
            <p>Ký Ức Studio được nảy mầm từ xu hướng trẻ trung, hiện đại, mang văn hóa Việt Nam. Chúng tôi tạo ra một không gian nghệ thuật nơi tinh thần trẻ trung, phá cách hòa quyện hoàn hảo cùng niềm tự hào về văn hóa hiện đại Việt Nam.</p>
            <p>Tại đây, khách hàng không bị gò bó trong những bối cảnh cổ điển nhàm chán. Ký Ức Studio mang đến những set chụp sử dụng kỹ thuật ánh sáng điện ảnh, màu sắc nổi bật, kết hợp cùng các chất liệu văn hóa Việt được cách điệu một cách tinh tế.</p>
          </div>
        </div>

        <!-- Values -->
        <div class="about-section">
          <h2>Giá trị cốt lõi</h2>
          <div class="values-grid">
            <div class="value-card">
              <span>✦</span>
              <h4>Sáng tạo không giới hạn</h4>
              <p>Luôn cập nhật, đổi mới và tiên phong thử nghiệm các xu hướng mới.</p>
            </div>
            <div class="value-card">
              <span>♡</span>
              <h4>Khách hàng là nguồn cảm hứng</h4>
              <p>Cá nhân hóa từng góc máy, layout và phong cách cho mỗi khách hàng.</p>
            </div>
            <div class="value-card">
              <span>◆</span>
              <h4>Chuyên nghiệp & Đồng bộ</h4>
              <p>Chỉn chu, đúng giờ và minh bạch từ khâu tư vấn đến bàn giao sản phẩm.</p>
            </div>
            <div class="value-card">
              <span>❋</span>
              <h4>Tối ưu hóa giá trị</h4>
              <p>Gói dịch vụ linh hoạt, chi phí hợp lý tương xứng chất lượng nghệ thuật.</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="about-section">
          <div class="about-stats">
            @for (stat of data.stats; track stat.label) {
              <div class="about-stat">
                <span>{{ stat.value }}</span>
                <small>{{ stat.label }}</small>
              </div>
            }
          </div>
        </div>

        <!-- CTA -->
        <div class="about-cta">
          <h3>Sẵn sàng tạo nên câu chuyện của riêng bạn?</h3>
          <a routerLink="/booking" class="btn-primary-custom">Đặt lịch ngay →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-page__banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: var(--space-4xl) 0;
      text-align: center;
    }
    .about-page__banner h1 {
      color: var(--color-text-primary);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-sm);
    }
    .about-page__banner p {
      color: var(--color-text-light);
      font-size: var(--text-lg);
    }
    .about-page__content {
      padding: var(--space-5xl) 0;
    }
    .about-section {
      margin-bottom: var(--space-5xl);
      text-align: center;
    }
    .about-section h2 {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-2xl);
    }
    .about-story {
      max-width: 700px;
      margin: 0 auto;
    }
    .about-story p {
      font-size: var(--text-base);
      line-height: 1.8;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-md);
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      max-width: 1000px;
      margin: 0 auto;
    }
    .value-card {
      text-align: center;
      padding: var(--space-xl);
    }
    .value-card span {
      font-size: 1.5rem;
      color: var(--color-accent);
      display: block;
      margin-bottom: var(--space-md);
    }
    .value-card h4 {
      font-size: var(--text-base);
      margin-bottom: var(--space-sm);
    }
    .value-card p {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.6;
    }
    .about-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      max-width: 800px;
      margin: 0 auto;
    }
    .about-stat {
      text-align: center;
    }
    .about-stat span {
      display: block;
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      font-weight: 600;
      color: var(--color-primary);
    }
    .about-stat small {
      font-size: var(--text-sm);
      color: var(--color-text-light);
    }
    .about-cta {
      text-align: center;
      background: var(--color-bg-cream);
      padding: var(--space-3xl);
      border-radius: var(--radius-xl);
    }
    .about-cta h3 {
      font-size: var(--text-2xl);
      margin-bottom: var(--space-xl);
    }
    @media (max-width: 992px) {
      .values-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 576px) {
      .values-grid { grid-template-columns: 1fr; }
      .about-stats { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class AboutComponent {
  constructor(public data: DataService) {}
}
