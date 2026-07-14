import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

interface Review {
  name: string;
  rating: number;
  service: string;
  content: string;
  images: string[];
  date: Date;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <section class="support-page">
      <!-- ===== Banner ===== -->
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
        <!-- ===== FAQ ===== -->
        <div class="support-faq">
          @for (item of faqs; track item.q) {
            <div class="support-faq__item">
              <h4>{{ item.q }}</h4>
              <p>{{ item.a }}</p>
            </div>
          }
        </div>

        <!-- ===== Hạng thành viên ===== -->
        <div class="support-membership">
          <div class="support-membership__header">
            <span class="section-eyebrow">— Hạng thành viên —</span>
            <h2>CHƯƠNG TRÌNH<br />ĐIỂM TÍCH LŨY</h2>
          </div>

          <!-- Current Points Card -->
          <div class="support-membership__status">
            <div class="membership-status__points">
              <span class="membership-status__number">{{ currentPoints.toLocaleString('vi-VN') }}</span>
              <span class="membership-status__unit">điểm</span>
            </div>
            <div class="membership-status__info">
              <p class="membership-status__current">Hạng hiện tại: <strong>{{ currentTier.name }}</strong></p>
              @if (nextTier) {
                <p class="membership-status__next">
                  Tiếp theo: Hạng <strong>{{ nextTier.name }}</strong> — {{ nextTier.min - currentPoints }} điểm nữa
                </p>
              }
            </div>
            <!-- Progress bar -->
            <div class="membership-status__bar">
              <div class="membership-status__bar-fill" [style.width.%]="progressPercent"></div>
            </div>
          </div>

          <!-- Tier Cards -->
          <div class="support-membership__tiers">
            @for (tier of membershipTiers; track tier.name) {
              <div
                class="tier-card"
                [class.tier-card--featured]="tier.featured"
                [class.tier-card--current]="tier.name === currentTier.name"
              >
                @if (tier.featured) {
                  <div class="tier-card__badge">Phổ biến nhất</div>
                }
                <div class="tier-card__body">
                  <h3 class="tier-card__name">{{ tier.name }}</h3>
                  <p class="tier-card__range">{{ tier.range }}</p>
                  <ul class="tier-card__benefits">
                    @for (b of tier.benefits; track b) {
                      <li><i class="bi bi-check-lg"></i> {{ b }}</li>
                    }
                  </ul>
                </div>
              </div>
            }
          </div>

          <!-- Earning Rules -->
          <div class="support-membership__rules">
            <div class="membership-rule">
              <i class="bi bi-person-plus"></i>
              <span>Giới thiệu thành công 1 khách hàng mới = <strong>100 điểm</strong></span>
            </div>
            <div class="membership-rule">
              <i class="bi bi-cash-coin"></i>
              <span>Mỗi <strong>10.000đ</strong> = 1 điểm. Điểm cộng ngay sau khi hoàn thành thanh toán.</span>
            </div>
            <div class="membership-rule">
              <i class="bi bi-star"></i>
              <span>Chia sẻ đánh giá 5 sao = <strong>50 điểm</strong> thưởng cho tài khoản</span>
            </div>
          </div>
        </div>

        <!-- ===== Support Links ===== -->
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

        <!-- ===== Đánh giá khách hàng ===== -->
        <div class="support-reviews">
          <div class="support-reviews__header">
            <span class="section-eyebrow">— Đánh giá —</span>
            <h2>KHÁCH HÀNG<br />NÓI GÌ VỀ CHÚNG TÔI</h2>
          </div>

          <!-- Stats Bar -->
          <div class="support-reviews__stats">
            <div class="review-stat">
              <span class="review-stat__number">200+</span>
              <span class="review-stat__label">Đánh giá</span>
            </div>
            <div class="review-stat">
              <span class="review-stat__number">4.8/5</span>
              <span class="review-stat__label">
                @for (s of [1,2,3,4,5]; track s) {
                  <i class="bi bi-star-fill"></i>
                }
              </span>
            </div>
            <div class="review-stat">
              <span class="review-stat__number">96%</span>
              <span class="review-stat__label">Khách hàng hài lòng</span>
            </div>
          </div>

          <!-- Testimonials Grid -->
          <div class="support-reviews__grid">
            @for (review of testimonials; track review.name) {
              <div class="review-card">
                <div class="review-card__stars">
                  @for (s of [1,2,3,4,5]; track s) {
                    <i class="bi bi-star-fill"></i>
                  }
                </div>
                <p class="review-card__text">"{{ review.text }}"</p>
                <div class="review-card__author">
                  <div class="review-card__avatar">{{ review.name.charAt(0) }}</div>
                  <div>
                    <p class="review-card__name">{{ review.name }}</p>
                    <p class="review-card__service">{{ review.service }}</p>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Review Form -->
          <div class="support-reviews__form">
            <h3>Chia sẻ trải nghiệm của bạn</h3>
            <form (ngSubmit)="submitReview()" #reviewForm="ngForm">
              <div class="review-form__grid">
                <div class="review-form__field">
                  <label for="reviewName">Họ và tên *</label>
                  <input
                    type="text" id="reviewName" name="reviewName"
                    [(ngModel)]="newReview.name" required
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div class="review-form__field">
                  <label>Đánh giá sao *</label>
                  <div class="review-form__stars">
                    @for (star of [1,2,3,4,5]; track star) {
                      <i
                        class="bi"
                        [class.bi-star-fill]="star <= newReview.rating"
                        [class.bi-star]="star > newReview.rating"
                        (click)="newReview.rating = star"
                      ></i>
                    }
                  </div>
                </div>
                <div class="review-form__field">
                  <label for="reviewService">Gói dịch vụ đã dùng</label>
                  <select id="reviewService" name="reviewService" [(ngModel)]="newReview.service">
                    <option value="">Chọn dịch vụ</option>
                    <option>Chân dung</option>
                    <option>Cặp đôi</option>
                    <option>Gia đình</option>
                    <option>Áo dài</option>
                    <option>Mẹ &amp; bé</option>
                    <option>Newborn</option>
                    <option>Sự kiện</option>
                  </select>
                </div>
              </div>
              <div class="review-form__field review-form__field--full">
                <label for="reviewContent">Nội dung đánh giá *</label>
                <textarea
                  id="reviewContent" name="reviewContent"
                  [(ngModel)]="newReview.content" required
                  placeholder="Chia sẻ những trải nghiệm của bạn tại Ký Ức Studio..."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" class="btn-primary-custom" [disabled]="!reviewForm.valid || submitting">
                {{ submitting ? 'Đang gửi...' : 'Gửi đánh giá' }}
              </button>
            </form>
          </div>
        </div>

        <!-- ===== CTA ===== -->
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
    /* ===== Banner ===== */
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

    /* ===== Shared Eyebrow ===== */
    .section-eyebrow {
      display: inline-block;
      font-size: var(--text-2xs);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--brand-primary);
      font-weight: 600;
      margin-bottom: var(--space-sm);
    }

    /* ===== FAQ ===== */
    .support-faq {
      max-width: 760px;
      margin: 0 auto var(--space-4xl);
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

    /* ===== Hạng thành viên ===== */
    .support-membership {
      margin-bottom: var(--space-4xl);
    }
    .support-membership__header {
      text-align: center;
      margin-bottom: var(--space-3xl);
    }
    .support-membership__header h2 {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--color-heading-espresso);
      letter-spacing: -0.01em;
      line-height: 1.3;
      margin: 0;
    }

    /* Status card */
    .support-membership__status {
      max-width: 600px;
      margin: 0 auto var(--space-3xl);
      background: var(--tint-t5);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      text-align: center;
    }
    .membership-status__points {
      margin-bottom: var(--space-md);
    }
    .membership-status__number {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      font-weight: 700;
      color: var(--brand-primary);
      letter-spacing: -0.02em;
    }
    .membership-status__unit {
      font-size: var(--text-lg);
      color: var(--color-text-muted);
      margin-left: var(--space-xs);
    }
    .membership-status__info {
      margin-bottom: var(--space-lg);
    }
    .membership-status__current {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      margin: 0 0 var(--space-xs);
    }
    .membership-status__current strong {
      color: #C9A87C;
      font-weight: 700;
    }
    .membership-status__next {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      margin: 0;
    }
    .membership-status__next strong {
      color: var(--color-heading-espresso);
    }
    .membership-status__bar {
      height: 8px;
      background: var(--color-border-light);
      border-radius: var(--radius-full);
      overflow: hidden;
    }
    .membership-status__bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #C9A87C, var(--brand-primary));
      border-radius: var(--radius-full);
      transition: width var(--transition-base);
    }

    /* Tier cards */
    .support-membership__tiers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
      max-width: 960px;
      margin: 0 auto var(--space-3xl);
    }
    .tier-card {
      background: var(--color-bg-warm);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-xl);
      overflow: hidden;
      text-align: center;
      transition: all var(--transition-base);
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .tier-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-card-hover);
    }
    .tier-card--current {
      border-color: var(--color-accent-rose);
      box-shadow: var(--shadow-card);
    }
    .tier-card--featured {
      background: linear-gradient(180deg, var(--tint-t4) 0%, var(--color-bg-warm) 40%);
      border-color: var(--brand-primary);
      box-shadow: var(--shadow-card);
    }
    .tier-card--featured:hover {
      box-shadow: var(--shadow-card-hover);
    }
    .tier-card__badge {
      background: var(--brand-primary);
      color: var(--neutral-white);
      padding: var(--space-xs) var(--space-md);
      font-size: var(--text-2xs);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .tier-card__body {
      padding: var(--space-2xl);
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .tier-card__name {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: 600;
      color: var(--color-heading-espresso);
      margin: 0 0 var(--space-xs);
    }
    .tier-card--featured .tier-card__name {
      color: var(--brand-primary);
    }
    .tier-card__range {
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      margin: 0 0 var(--space-xl);
      font-weight: 500;
    }
    .tier-card__benefits {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
      flex: 1;
    }
    .tier-card__benefits li {
      padding: var(--space-xs) 0;
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      line-height: 1.5;
    }
    .tier-card__benefits li i {
      color: var(--brand-primary);
      font-weight: 700;
      margin-top: 2px;
      flex-shrink: 0;
    }

    /* Earning rules */
    .support-membership__rules {
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }
    .membership-rule {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-xl);
      background: var(--tint-t5);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-light);
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
    }
    .membership-rule i {
      font-size: 1.25rem;
      color: var(--brand-primary);
      flex-shrink: 0;
    }
    .membership-rule strong {
      color: var(--color-heading-espresso);
    }

    /* ===== Support Links ===== */
    .support-links {
      max-width: 760px;
      margin: 0 auto var(--space-4xl);
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

    /* ===== Reviews ===== */
    .support-reviews {
      margin-bottom: var(--space-4xl);
    }
    .support-reviews__header {
      text-align: center;
      margin-bottom: var(--space-3xl);
    }
    .support-reviews__header h2 {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--color-heading-espresso);
      letter-spacing: -0.01em;
      line-height: 1.3;
      margin: 0;
    }

    /* Stats bar */
    .support-reviews__stats {
      display: flex;
      justify-content: center;
      gap: var(--space-4xl);
      margin-bottom: var(--space-3xl);
      padding: var(--space-2xl);
      background: var(--tint-t5);
      border-radius: var(--radius-xl);
      border: 1.5px solid var(--color-border-light);
    }
    .review-stat {
      text-align: center;
    }
    .review-stat__number {
      display: block;
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--brand-primary);
      margin-bottom: var(--space-xs);
    }
    .review-stat__label {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
    }
    .review-stat__label i {
      color: #C9A87C;
      font-size: 0.8rem;
    }

    /* Testimonials grid */
    .support-reviews__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      max-width: 900px;
      margin: 0 auto var(--space-3xl);
    }
    .review-card {
      background: var(--tint-t5);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      transition: all var(--transition-base);
    }
    .review-card:hover {
      border-color: var(--color-accent-rose);
      transform: translateY(-2px);
      box-shadow: var(--shadow-card);
    }
    .review-card__stars {
      margin-bottom: var(--space-md);
    }
    .review-card__stars i {
      color: #C9A87C;
      font-size: 0.85rem;
    }
    .review-card__text {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin: 0 0 var(--space-lg);
      font-style: italic;
    }
    .review-card__author {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }
    .review-card__avatar {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, var(--tint-t4), var(--color-accent-rose));
      color: var(--brand-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: var(--text-sm);
      flex-shrink: 0;
    }
    .review-card__name {
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--color-heading-espresso);
      margin: 0 0 2px;
    }
    .review-card__service {
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      margin: 0;
    }

    /* Review form */
    .support-reviews__form {
      max-width: 700px;
      margin: 0 auto;
      background: var(--tint-t5);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl) var(--space-3xl);
    }
    .support-reviews__form h3 {
      text-align: center;
      font-family: var(--font-display);
      font-size: var(--text-xl);
      color: var(--color-heading-espresso);
      margin: 0 0 var(--space-xl);
    }
    .review-form__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-lg);
      margin-bottom: var(--space-lg);
    }
    .review-form__field {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }
    .review-form__field--full {
      margin-bottom: var(--space-lg);
      grid-column: 1 / -1;
    }
    .review-form__field label {
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--color-text-primary);
    }
    .review-form__field input,
    .review-form__field select,
    .review-form__field textarea {
      padding: var(--space-sm) var(--space-md);
      border: 1.5px solid var(--color-border-light);
      border-radius: var(--radius-md);
      font-size: var(--text-sm);
      font-family: var(--font-body);
      color: var(--color-text-primary);
      background: var(--color-bg-white);
      transition: border-color var(--transition-fast);
    }
    .review-form__field input:focus,
    .review-form__field select:focus,
    .review-form__field textarea:focus {
      outline: none;
      border-color: var(--brand-primary);
    }
    .review-form__stars {
      display: flex;
      gap: 2px;
      padding: var(--space-xs) 0;
    }
    .review-form__stars i {
      font-size: 1.25rem;
      color: #C9A87C;
      cursor: pointer;
      transition: transform var(--transition-fast);
    }
    .review-form__stars i:hover {
      transform: scale(1.2);
    }
    .support-reviews__form .btn-primary-custom {
      display: block;
      margin: 0 auto;
    }

    /* ===== CTA ===== */
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

    /* ===== Responsive ===== */
    @media (max-width: 992px) {
      .support-membership__tiers {
        grid-template-columns: 1fr;
        max-width: 420px;
      }
      .support-reviews__grid {
        grid-template-columns: 1fr;
        max-width: 500px;
      }
      .review-form__grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 768px) {
      .support-links {
        grid-template-columns: 1fr;
      }
      .support-reviews__stats {
        flex-direction: column;
        gap: var(--space-lg);
      }
    }
  `]
})
export class SupportComponent {
  /* ===== FAQ Data ===== */
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

  /* ===== Membership Data ===== */
  currentPoints = 1350;
  currentTier = { name: 'Vàng', min: 1000, max: 4999 };

  membershipTiers = [
    {
      name: 'Bạc',
      range: '0 – 999 điểm',
      featured: false,
      benefits: [
        'Tích điểm mỗi lần đặt lịch',
        'Giảm 5% cho lần chụp thứ 2',
        'Ưu tiên đặt lịch cuối tuần',
        'Quà tặng sinh nhật'
      ]
    },
    {
      name: 'Vàng',
      range: '1.000 – 4.999 điểm',
      featured: true,
      benefits: [
        'Tích điểm x1.5',
        'Giảm 10% mỗi lần chụp',
        'Ưu tiên đặt lịch mọi thời điểm',
        'Quà tặng sinh nhật VIP'
      ]
    },
    {
      name: 'Kim Cương',
      range: '5.000+ điểm',
      featured: false,
      benefits: [
        'Giảm 15% mỗi lần chụp',
        'Tặng album cao cấp',
        'Chọn nhiếp ảnh gia yêu thích',
        'Quà tặng sinh nhật đặc biệt'
      ]
    }
  ];

  get nextTier() {
    const tiers = [
      { name: 'Bạc', min: 0, max: 999 },
      { name: 'Vàng', min: 1000, max: 4999 },
      { name: 'Kim Cương', min: 5000, max: Infinity }
    ];
    const idx = tiers.findIndex(t => t.name === this.currentTier.name);
    if (idx < tiers.length - 1) return tiers[idx + 1];
    return null;
  }

  get progressPercent() {
    const currentMin = this.currentTier.min;
    const currentMax = this.currentTier.max;
    const range = currentMax - currentMin;
    const progress = this.currentPoints - currentMin;
    return Math.min(100, Math.max(0, (progress / range) * 100));
  }

  /* ===== Reviews Data ===== */
  testimonials = [
    {
      name: 'Nguyễn Thị Lan Anh',
      text: 'Trải nghiệm tuyệt vời! Đội ngũ makeup và stylist cực kỳ tận tâm, tôi cảm thấy như một nàng công chúa thật sự. Những bức ảnh ra đời làm tôi không nhận ra mình nữa - đẹp đến bất ngờ!',
      rating: 5,
      service: 'Chân dung'
    },
    {
      name: 'Võ Thị Hải Yến',
      text: 'Gia đình tôi có bộ ảnh đẹp nhất từ trước đến nay. Các bé rất thích chơi với đội ngũ nhiếp ảnh, không khí thoải mái tự nhiên. Album gia đình sẽ là báu vật của chúng tôi mãi mãi.',
      rating: 5,
      service: 'Gia đình'
    },
    {
      name: 'Trần Hoàng Nam',
      text: 'Studio sạch đẹp, trang phục đa dạng và chất lượng cao. Nhiếp ảnh gia rất kiên nhẫn chụp đến khi ra được góc đẹp nhất. Tôi sẽ giới thiệu cho cả hội bạn thân rồi!',
      rating: 5,
      service: 'Cặp đôi'
    },
    {
      name: 'Võ Thanh Tâm',
      text: 'Xứng đáng từng đồng! 4 concept khác nhau, mỗi concept là một câu chuyện riêng. Nhiếp ảnh gia hiểu rõ phong cách của tôi và biến ý tưởng thành hiện thực. Tuyệt vời!',
      rating: 5,
      service: 'Áo dài'
    }
  ];

  newReview = { name: '', rating: 5, service: '', content: '' };
  submitting = false;

  constructor(public data: DataService) {}

  submitReview() {
    if (!this.newReview.name || !this.newReview.content) return;
    this.submitting = true;
    // Simulate submission
    setTimeout(() => {
      this.testimonials.unshift({
        name: this.newReview.name,
        text: this.newReview.content,
        rating: this.newReview.rating,
        service: this.newReview.service || 'Chung'
      });
      this.newReview = { name: '', rating: 5, service: '', content: '' };
      this.submitting = false;
    }, 800);
  }
}
