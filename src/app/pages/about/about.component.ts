import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-page">
      <!-- Banner -->
      <div class="about-banner">
        <div class="container-custom">
          <p class="about-banner__breadcrumb">Trang chủ > Về chúng tôi</p>
          <h1>VỀ CHÚNG TÔI</h1>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="about-hero">
        <img
          src="assets/images/gallery/ao-dai-03.jpg"
          alt="Ký Ức Studio — Nơi mỗi phụ nữ Việt tỏa sáng"
          class="about-hero__img"
        />
        <div class="about-hero__overlay">
          <p class="about-hero__tagline">"Nơi mỗi phụ nữ Việt tỏa sáng"</p>
        </div>
      </div>

      <div class="container-custom">
        <!-- Story -->
        <div class="about-story">
          <div class="about-story__image">
            <img
              src="assets/images/gallery/chan-dung-01.jpg"
              alt="Ký Ức Studio — Câu chuyện"
            />
          </div>
          <div class="about-story__text">
            <span class="section-eyebrow">— Câu chuyện —</span>
            <h2>Ký Ức Studio ra đời<br />từ cảm hứng văn hóa Việt</h2>
            <p>Trong thời đại số hóa bùng nổ, chúng ta rất dễ dàng lưu trữ hàng ngàn bức ảnh trong chiếc điện thoại di động, nhưng phần lớn những khoảnh khắc đó thường trôi qua rất nhanh và thiếu đi chiều sâu cảm xúc.</p>
            <p>Ký Ức Studio được nảy mầm từ xu hướng trẻ trung, hiện đại, mang văn hóa Việt Nam. Chúng tôi tạo ra một không gian nghệ thuật nơi tinh thần trẻ trung, phá cách hòa quyện hoàn hảo cùng niềm tự hào về văn hóa hiện đại Việt Nam.</p>
            <p>Tại đây, khách hàng không bị gò bó trong những bối cảnh cổ điển nhàm chán. Ký Ức Studio mang đến những set chụp sử dụng kỹ thuật ánh sáng điện ảnh, màu sắc nổi bật, kết hợp cùng các chất liệu văn hóa Việt được cách điệu một cách tinh tế.</p>
          </div>
        </div>

        <!-- Values -->
        <div class="about-values">
          <span class="section-eyebrow">— Giá trị cốt lõi —</span>
          <h2>Cam kết tạo nên những<br />trải nghiệm khác biệt</h2>
          <div class="about-values__grid">
            <div class="value-card">
              <div class="value-card__icon">
                <i class="bi bi-stars"></i>
              </div>
              <h4>Sáng tạo không giới hạn</h4>
              <p>Luôn cập nhật, đổi mới và tiên phong thử nghiệm các xu hướng mới trong từng concept chụp ảnh.</p>
            </div>
            <div class="value-card">
              <div class="value-card__icon">
                <i class="bi bi-heart-fill"></i>
              </div>
              <h4>Khách hàng là nguồn cảm hứng</h4>
              <p>Cá nhân hóa từng góc máy, layout và phong cách chỉnh sửa cho mỗi khách hàng.</p>
            </div>
            <div class="value-card">
              <div class="value-card__icon">
                <i class="bi bi-gem"></i>
              </div>
              <h4>Chuyên nghiệp & Đồng bộ</h4>
              <p>Chỉn chu, đúng giờ và minh bạch từ khâu tư vấn đến bàn giao sản phẩm cuối cùng.</p>
            </div>
            <div class="value-card">
              <div class="value-card__icon">
                <i class="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Tối ưu hóa giá trị</h4>
              <p>Gói dịch vụ linh hoạt, chi phí hợp lý tương xứng chất lượng nghệ thuật.</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="about-stats">
          @for (stat of data.stats; track stat.label) {
            <div class="about-stat">
              <span class="about-stat__value">{{ stat.value }}</span>
              <span class="about-stat__label">{{ stat.label }}</span>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="about-cta">
          <div class="about-cta__inner">
            <h3>Sẵn sàng tạo nên câu chuyện<br />của riêng bạn?</h3>
            <p>Để lại thông tin, đội ngũ Ký Ức sẽ tư vấn concept phù hợp nhất với cá tính của bạn.</p>
            <a routerLink="/booking" class="btn-primary-custom">Đặt lịch ngay →</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== Banner ===== */
    .about-banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: calc(var(--header-height) + var(--space-4xl)) 0 var(--space-3xl);
      text-align: center;
    }

    .about-banner__breadcrumb {
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      margin-bottom: var(--space-md);
      letter-spacing: 0.04em;
    }

    .about-banner h1 {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      font-weight: 600;
      color: var(--color-heading-espresso);
      letter-spacing: -0.02em;
      margin: 0;
    }

    /* ===== Hero Image ===== */
    .about-hero {
      position: relative;
      width: 100%;
      max-width: var(--max-width);
      margin: var(--space-2xl) auto 0;
      border-radius: var(--radius-xl);
      overflow: hidden;
    }

    .about-hero__img {
      width: 100%;
      height: auto;
      max-height: 560px;
      object-fit: cover;
      display: block;
    }

    .about-hero__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--space-2xl);
      background: linear-gradient(to top, rgba(47, 33, 23, 0.55) 0%, transparent 100%);
      display: flex;
      justify-content: center;
    }

    .about-hero__tagline {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      font-style: italic;
      color: var(--neutral-white);
      margin: 0;
      letter-spacing: 0.02em;
      text-shadow: 0 1px 4px rgba(8, 5, 3, 0.4);
    }

    /* ===== Section Eyebrow ===== */
    .section-eyebrow {
      display: inline-block;
      font-size: var(--text-2xs);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--brand-primary);
      font-weight: 600;
      margin-bottom: var(--space-sm);
    }

    /* ===== Story ===== */
    .about-story {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      padding: var(--space-5xl) 0;
    }

    .about-story__image {
      border-radius: var(--radius-xl);
      overflow: hidden;
      aspect-ratio: 4 / 5;
    }

    .about-story__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .about-story__text h2 {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 500;
      color: var(--color-heading-espresso);
      line-height: 1.35;
      letter-spacing: -0.01em;
      margin-bottom: var(--space-lg);
    }

    .about-story__text p {
      font-size: var(--text-sm);
      line-height: 1.8;
      color: var(--color-text-muted);
      margin-bottom: var(--space-md);
    }

    .about-story__text p:last-child {
      margin-bottom: 0;
    }

    /* ===== Values ===== */
    .about-values {
      padding: var(--space-4xl) 0;
      text-align: center;
    }

    .about-values h2 {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 500;
      color: var(--color-heading-espresso);
      line-height: 1.35;
      letter-spacing: -0.01em;
      margin-bottom: var(--space-3xl);
    }

    .about-values__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
    }

    .value-card {
      background: var(--color-bg-cream);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-lg);
      padding: var(--space-2xl) var(--space-xl);
      text-align: center;
      transition: all var(--transition-base);
    }

    .value-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-card-hover);
      border-color: var(--color-accent-rose);
      background: var(--color-bg-warm);
    }

    .value-card__icon {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-lg);
      background: linear-gradient(135deg, var(--tint-t4) 0%, var(--tint-t5) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-md);
    }

    .value-card__icon i {
      font-size: 1.5rem;
      color: var(--brand-primary);
    }

    .value-card h4 {
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--space-xs);
    }

    .value-card p {
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      line-height: 1.7;
      margin: 0;
    }

    /* ===== Stats ===== */
    .about-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      padding: var(--space-2xl) 0 var(--space-4xl);
    }

    .about-stat {
      text-align: center;
      padding: var(--space-xl) var(--space-md);
      background: var(--color-bg-cream);
      border-radius: var(--radius-lg);
      border: 1.5px solid var(--color-border-light);
      transition: all var(--transition-base);
    }

    .about-stat:hover {
      border-color: var(--color-accent-rose);
      box-shadow: var(--shadow-card);
    }

    .about-stat__value {
      display: block;
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      font-weight: 600;
      color: var(--brand-primary);
      letter-spacing: -0.02em;
      margin-bottom: var(--space-xs);
    }

    .about-stat__label {
      display: block;
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      line-height: 1.4;
    }

    /* ===== CTA ===== */
    .about-cta {
      background: var(--color-bg-charcoal);
      border-radius: var(--radius-xl);
      padding: var(--space-4xl) var(--space-2xl);
      text-align: center;
      margin-bottom: var(--space-4xl);
    }

    .about-cta__inner h3 {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 500;
      color: var(--neutral-white);
      letter-spacing: -0.01em;
      margin-bottom: var(--space-md);
      line-height: 1.35;
    }

    .about-cta__inner p {
      font-size: var(--text-sm);
      color: var(--tint-t4);
      margin-bottom: var(--space-xl);
      line-height: 1.7;
    }

    .about-cta__inner .btn-primary-custom {
      display: inline-flex;
    }

    /* ===== Responsive ===== */
    @media (max-width: 992px) {
      .about-story {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }

      .about-story__image {
        aspect-ratio: 16 / 9;
        max-height: 400px;
      }

      .about-values__grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .about-stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .about-banner h1 {
        font-size: var(--text-4xl);
      }

      .about-hero {
        border-radius: 0;
        margin-top: var(--space-xl);
      }

      .about-hero__img {
        max-height: 360px;
      }

      .about-hero__tagline {
        font-size: var(--text-lg);
      }

      .about-story__text h2,
      .about-values h2,
      .about-cta__inner h3 {
        font-size: var(--text-2xl);
      }
    }

    @media (max-width: 576px) {
      .about-values__grid {
        grid-template-columns: 1fr;
      }

      .about-stats {
        grid-template-columns: 1fr;
      }

      .about-hero__overlay {
        padding: var(--space-lg);
      }
    }
  `]
})
export class AboutComponent {
  constructor(public data: DataService) {}
}
