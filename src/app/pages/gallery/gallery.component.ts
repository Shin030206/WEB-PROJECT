import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { DataService, SpecialCollection } from '../../shared/services/data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  template: `
    <section class="gallery-page">
      <!-- ===== Banner Header ===== -->
      <div class="gallery-page__banner">
        <div class="container-custom">
          <p class="gallery-page__banner-eyebrow">Bộ sưu tập đặc biệt</p>
          <h1 class="gallery-page__banner-heading">
            5 Bộ sưu tập<br />
            <em class="gallery-page__banner-heading-em">5 cung bậc ký ức</em>
          </h1>
          <p class="gallery-page__banner-desc">
            Mỗi bộ sưu tập là một hành trình ký ức riêng biệt, với gam màu và câu chuyện của chính nó.
            Chọn câu chuyện nào hợp với bạn — click để mở trang đầy đủ của từng bộ.
          </p>
          <p class="gallery-page__banner-note">Mỗi bộ sưu tập mở trong trang mới</p>
        </div>
      </div>

      <!-- ===== Collection rows — 2-col grid, alternating stripe bg (Figma: Bộ sưu tập.png) ===== -->
      @for (row of rows; track $index; let ri = $index) {
        <div class="gallery-page__row" [class.gallery-page__row--alt]="ri % 2 === 1">
          <div class="container-custom">
            <div class="gallery-page__row-grid">
              @for (collection of row; track collection.id; let i = $index) {
                <a
                  [routerLink]="['/collection', collection.id]"
                  class="gallery-card animate-fade-in-up"
                  [style.animation-delay]="i * 120 + 'ms'"
                >
                  <!-- Image area — landscape, rounded top corners -->
                  <div class="gallery-card__media">
                    <img
                      [src]="'assets/' + collection.image"
                      [alt]="collection.name"
                      class="gallery-card__img"
                      loading="lazy"
                    />
                  </div>

                  <!-- Card body -->
                  <div class="gallery-card__body">
                    <h3 class="gallery-card__name">{{ collection.name }}</h3>
                    <p class="gallery-card__subtitle">({{ collection.subtitle | uppercase }})</p>
                    <p class="gallery-card__tagline">{{ getTagline(collection) }}</p>
                    <p class="gallery-card__desc">{{ getRest(collection) }}</p>
                    <span class="gallery-card__cta">Xem bộ sưu tập <i class="bi bi-arrow-up-right"></i></span>
                  </div>
                </a>
              }
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    /* ===== Banner Header ===== */
    .gallery-page__banner {
      background: linear-gradient(165deg, #FEF7F2 0%, #F9F7F1 40%, #F4E0D1 100%);
      padding: calc(var(--header-height) + var(--space-5xl)) 0 var(--space-5xl);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .gallery-page__banner::before {
      content: '';
      position: absolute;
      top: -120px;
      right: -80px;
      width: 360px;
      height: 360px;
      background: radial-gradient(circle, rgba(167, 74, 0, 0.06) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .gallery-page__banner::after {
      content: '';
      position: absolute;
      bottom: -60px;
      left: -40px;
      width: 240px;
      height: 240px;
      background: radial-gradient(circle, rgba(167, 74, 0, 0.05) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .gallery-page__banner-eyebrow {
      font-size: var(--text-2xs);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--color-primary);
      font-weight: 600;
      margin-bottom: var(--space-md);
      position: relative;
    }
    .gallery-page__banner-heading {
      font-family: var(--font-display);
      color: var(--color-text-primary);
      font-size: clamp(2rem, 4.5vw, 3.5rem);
      font-weight: 600;
      margin-bottom: var(--space-md);
      letter-spacing: -0.01em;
      line-height: 1.2;
      position: relative;
    }
    .gallery-page__banner-desc {
      color: var(--color-text-light);
      font-size: var(--text-base);
      max-width: 640px;
      margin: 0 auto;
      line-height: 1.7;
      position: relative;
    }
    .gallery-page__banner-heading-em {
      font-style: italic;
      color: var(--color-concept-link);
      display: block;
    }
    .gallery-page__banner-note {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      margin-top: var(--space-md);
      position: relative;
    }

    /* ===== Collection rows — alternating stripe background ===== */
    .gallery-page__row {
      background: #FDFAF7;
      padding: var(--space-3xl) 0;
    }
    .gallery-page__row--alt {
      background: var(--color-bg-beige);
    }
    .gallery-page__row-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      max-width: 1200px;
      margin: 0 auto;
    }

    /* ===== Gallery Card — landscape image + text body ===== */
    .gallery-card {
      display: block;
      background: var(--color-bg-cream);
      border-radius: var(--radius-card-concept);
      overflow: hidden;
      text-decoration: none;
      border: 1px solid var(--color-concept-card-border);
      box-shadow: var(--shadow-concept-card);
      transition: transform var(--transition-spring), box-shadow var(--transition-spring);
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .gallery-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-card-hover);
    }
    .gallery-card:hover .gallery-card__img {
      transform: scale(1.04);
    }
    .gallery-card:hover .gallery-card__cta {
      color: var(--brand-primary);
    }

    /* Image area — landscape ratio */
    .gallery-card__media {
      position: relative;
      overflow: hidden;
      aspect-ratio: 16 / 10;
      background: var(--color-img-placeholder);
    }
    .gallery-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Card body */
    .gallery-card__body {
      padding: 24px 28px 28px;
    }

    /* Title — Playfair Display serif */
    .gallery-card__name {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text-name);
      margin: 0 0 2px 0;
      line-height: 1.25;
      letter-spacing: -0.01em;
    }

    /* Subtitle in parens */
    .gallery-card__subtitle {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-name);
      margin: 0 0 12px 0;
      line-height: 1.25;
    }

    /* Italic tagline */
    .gallery-card__tagline {
      font-family: var(--font-concept-desc);
      font-style: italic;
      font-size: var(--text-sm);
      color: var(--color-concept-desc);
      margin: 0 0 10px 0;
      line-height: 1.5;
    }

    /* Description paragraph */
    .gallery-card__desc {
      font-family: var(--font-body);
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0 0 18px 0;
    }

    /* "Xem bộ sưu tập ↗" pill */
    .gallery-card__cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 20px;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-text-secondary);
      transition: all var(--transition-fast);
    }

    /* ===== Animations ===== */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      .gallery-page__banner {
        padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-3xl);
      }
      .gallery-page__row-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
      }
      .gallery-card__name {
        font-size: 1.3rem;
      }
      .gallery-card__body {
        padding: 18px 20px 22px;
      }
    }
  `]
})
export class GalleryComponent {
  collections: SpecialCollection[];
  rows: SpecialCollection[][];

  constructor(public data: DataService) {
    this.collections = this.data.specialCollections;
    this.rows = [];
    for (let i = 0; i < this.collections.length; i += 2) {
      this.rows.push(this.collections.slice(i, i + 2));
    }
  }

  getTagline(collection: SpecialCollection): string {
    return collection.description.split(/\.\s+/)[0] + '.';
  }

  getRest(collection: SpecialCollection): string {
    const parts = collection.description.split(/\.\s+/);
    return parts.slice(1).join('. ');
  }
}
