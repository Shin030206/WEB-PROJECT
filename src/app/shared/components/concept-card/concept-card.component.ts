import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Concept {
  id: string;
  name: string;
  category: string;
  eyebrow?: string;
  description: string;
  price: string;
  priceNote: string;
  image: string;
  badge?: string;
  conceptCount?: number;
}

@Component({
  selector: 'app-concept-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="categoryMode ? ['/concepts'] : ['/concept', concept.id]" [queryParams]="categoryMode ? {category: concept.category} : null" class="concept-card" [style.animation-delay]="delay * 80 + 'ms'">
      <!-- Image area — Figma: 363×454, aspect-ratio 4/5, background #EBE2C7 -->
      <div class="concept-card__media">
        <img
          [src]="getImageUrl()"
          [alt]="concept.name"
          class="concept-card__img"
          loading="lazy"
        />
        @if (concept.badge) {
          <span class="concept-card__badge">{{ concept.badge }}</span>
        }
      </div>

      <!-- Card body — Figma exact layout -->
      <div class="concept-card__body">
        <span class="concept-card__eyebrow">{{ concept.eyebrow || concept.category }}</span>
        <h3 class="concept-card__name">{{ concept.name }}</h3>
        <p class="concept-card__desc">{{ concept.description }}</p>

        <!-- Separator -->
        <div class="concept-card__sep"></div>

        <!-- Footer: price row + detail link -->
        <div class="concept-card__footer">
          <div class="concept-card__price-row">
            <span class="concept-card__price-label">Giá từ</span>
            <strong class="concept-card__price-value">{{ concept.price }}</strong>
            @if (concept.conceptCount) {
              <span class="concept-card__count">· {{ concept.conceptCount }} concept</span>
            }
          </div>
          <span class="concept-card__detail-link">Xem chi tiết →</span>
        </div>
      </div>
    </a>
  `,
  styles: [`
    /* ===== Concept Card — Figma v2 Exact Spec ===== */
    .concept-card {
      display: block;
      background: var(--color-bg-warm);
      border-radius: var(--radius-card-concept);
      overflow: hidden;
      text-decoration: none;
      border: 1px solid var(--color-concept-card-border);
      box-shadow: var(--shadow-concept-card);
      transition: transform var(--transition-spring), box-shadow var(--transition-spring);
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .concept-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-card-hover);
    }
    .concept-card:hover .concept-card__img {
      transform: scale(1.04);
    }

    /* ---- Image area — Figma: 363×454, 4/5 ratio, bg #EBE2C7 ---- */
    .concept-card__media {
      position: relative;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: var(--color-img-placeholder);
    }

    .concept-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .concept-card__badge {
      position: absolute;
      top: 12px;
      left: 12px;
      font-family: var(--font-accent);
      font-size: var(--text-2xs);
      font-weight: 600;
      color: #fff;
      background: var(--color-primary);
      padding: 4px 14px;
      border-radius: var(--radius-full);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ---- Card body ---- */
    .concept-card__body {
      padding: 20px 24px 24px;
    }

    /* Eyebrow — Figma: Manrope 11/13, letter-spacing 2.2px, uppercase, #555E34 */
    .concept-card__eyebrow {
      font-family: var(--font-concept-desc);
      font-size: 0.6875rem;
      font-weight: 600;
      color: var(--color-concept-desc);
      text-transform: uppercase;
      letter-spacing: 0.1375rem;   /* 2.2px/16px */
      display: block;
      margin-bottom: 6px;
    }

    /* Title — Figma: Inter 30/36, #2F2117 */
    .concept-card__name {
      font-family: var(--font-accent);
      font-size: 1.875rem;       /* 30px */
      font-weight: 400;
      color: var(--color-text-primary);
      margin: 0 0 6px 0;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    /* Description — Figma: Manrope 14/20, #555E34 */
    .concept-card__desc {
      font-family: var(--font-concept-desc);
      font-size: var(--text-sm);
      color: var(--color-concept-desc);
      line-height: 1.45;
      margin: 0 0 16px 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* ---- Separator — Figma: 1px rgba(222,211,191,0.40) ---- */
    .concept-card__sep {
      height: 1px;
      background: var(--color-concept-card-sep);
      margin-bottom: 14px;
    }

    /* ---- Footer ---- */
    .concept-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }

    .concept-card__price-row {
      display: flex;
      align-items: baseline;
      gap: 4px;
      flex-wrap: wrap;
    }

    /* "Giá từ" — Manrope 14/20, #555E34 */
    .concept-card__price-label {
      font-family: var(--font-concept-desc);
      font-size: var(--text-sm);
      color: var(--color-concept-desc);
    }

    /* Price value — Inter 14/20, medium, #2F2117 */
    .concept-card__price-value {
      font-family: var(--font-accent);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-text-primary);
    }

    /* "· N concept" — Manrope 12/18, #555E34 */
    .concept-card__count {
      font-family: var(--font-concept-desc);
      font-size: var(--text-xs);
      color: var(--color-concept-desc);
    }

    /* "Xem chi tiết →" — Manrope 14/20, medium, #8E6126 */
    .concept-card__detail-link {
      font-family: var(--font-concept-desc);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-concept-link);
      white-space: nowrap;
      transition: color var(--transition-fast);
    }
    .concept-card:hover .concept-card__detail-link {
      color: var(--brand-primary);
    }

    /* ---- Responsive ---- */
    @media (max-width: 768px) {
      .concept-card__name {
        font-size: 1.5rem;       /* 24px on mobile */
      }
      .concept-card__body {
        padding: 16px 18px 18px;
      }
    }
  `]
})
export class ConceptCardComponent {
  @Input() concept!: Concept;
  @Input() delay = 0;
  @Input() categoryMode = false;

  getImageUrl(): string {
    if (this.concept.image) return `assets/${this.concept.image}`;
    return `https://picsum.photos/seed/${this.concept.id}/600/750`;
  }
}
