import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { DataService, SpecialCollection, CollectionConcept } from '../../shared/services/data.service';

@Component({
  selector: 'app-collection-concept-detail',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  template: `
    <section class="cc-detail">
      @if (concept && collection) {
        <div class="container-custom cc-detail__back">
          <a routerLink="/gallery" class="cc-detail__back-link">
            <i class="bi bi-arrow-left"></i> Quay lại tất cả nhóm
          </a>
        </div>

        <div class="container-custom cc-detail__hero">
          <div class="cc-detail__image">
            <img [src]="'assets/' + concept.image" [alt]="concept.name" class="cc-detail__img" />
          </div>

          <div class="cc-detail__info">
            <span class="cc-detail__category">{{ concept.categoryLabel }}</span>
            <h1 class="cc-detail__title">{{ concept.name | uppercase }}</h1>
            <p class="cc-detail__desc">{{ concept.longDescription }}</p>

            <div class="cc-detail__price-box">
              <span class="cc-detail__price-label">Giá từ</span>
              <strong class="cc-detail__price-value">{{ concept.price }}</strong>
              <span class="cc-detail__price-note">{{ concept.priceNote }}</span>
            </div>

            <a routerLink="/booking" class="cc-detail__btn-primary">
              Đặt lịch bộ sưu tập này <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      } @else {
        <div class="cc-detail__not-found container-custom">
          <div class="cc-detail__not-found-icon"><i class="bi bi-image"></i></div>
          <h1>Concept không tìm thấy</h1>
          <p>Concept này có thể đã bị xóa hoặc không tồn tại.</p>
          <a routerLink="/gallery" class="btn-primary-custom">Xem tất cả bộ sưu tập</a>
        </div>
      }
    </section>
  `,
  styles: [`
    .cc-detail {
      background: linear-gradient(180deg, #FEF7F2 0%, rgba(246, 223, 211, 0.20) 100%);
      padding-bottom: var(--space-5xl);
    }

    .cc-detail__back {
      padding-top: calc(var(--header-height) + var(--space-xl));
      padding-bottom: var(--space-2xl);
    }
    .cc-detail__back-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      font-family: var(--font-body);
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: color var(--transition-fast);
    }
    .cc-detail__back-link i { font-size: 0.85rem; }
    .cc-detail__back-link:hover { color: var(--color-primary); }

    .cc-detail__hero {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 48px;
    }

    .cc-detail__image { grid-column: 1 / 4; }
    .cc-detail__img {
      width: 100%;
      height: 100%;
      max-height: 835px;
      object-fit: cover;
      display: block;
      border-radius: var(--radius-card);
    }

    .cc-detail__info {
      grid-column: 4 / 6;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .cc-detail__category {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--color-primary);
      text-transform: uppercase;
      letter-spacing: 0.225rem;
    }
    .cc-detail__title {
      font-family: var(--font-display);
      font-size: 3.75rem;
      font-weight: 400;
      color: #080503;
      line-height: 1.0;
      letter-spacing: -0.02em;
      margin: 0;
    }
    .cc-detail__desc {
      font-family: var(--font-body);
      font-size: var(--text-body-lg);
      color: var(--color-detail-body);
      line-height: 1.625;
      margin: 0;
    }

    .cc-detail__price-box {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 20px;
      border-radius: var(--radius-related);
      border: 1px solid var(--color-price-box-border);
      background: var(--color-price-box-bg);
    }
    .cc-detail__price-label {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.0375rem;
    }
    .cc-detail__price-value {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 400;
      color: var(--color-primary);
      line-height: 1.11;
    }
    .cc-detail__price-note {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      color: var(--color-text-muted);
    }

    .cc-detail__btn-primary {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 12px 32px;
      font-family: var(--font-body);
      font-size: var(--text-body-lg);
      font-weight: 500;
      color: #fff;
      background: var(--color-primary);
      border: none;
      border-radius: var(--radius-full);
      text-decoration: none;
      box-shadow: 0px 4px 24px rgba(142, 97, 38, 0.25);
      transition: background var(--transition-fast), box-shadow var(--transition-fast);
    }
    .cc-detail__btn-primary:hover {
      background: var(--color-primary-dark);
      box-shadow: 0px 6px 28px rgba(142, 97, 38, 0.35);
    }

    .cc-detail__not-found {
      text-align: center;
      padding: calc(var(--header-height) + var(--space-5xl)) var(--space-lg) var(--space-5xl);
    }
    .cc-detail__not-found-icon {
      font-size: 4rem;
      color: var(--color-border);
      margin-bottom: var(--space-lg);
    }
    .cc-detail__not-found h1 {
      font-family: var(--font-display);
      color: var(--color-text-primary);
      font-size: var(--text-3xl);
      margin-bottom: var(--space-sm);
    }
    .cc-detail__not-found p {
      color: var(--color-text-light);
      margin-bottom: var(--space-xl);
    }

    @media (max-width: 992px) {
      .cc-detail__hero { grid-template-columns: 1fr; gap: var(--space-3xl); }
      .cc-detail__image { grid-column: 1; max-width: 480px; }
      .cc-detail__img { max-height: 600px; }
      .cc-detail__info { grid-column: 1; }
      .cc-detail__title { font-size: 2.5rem; }
    }
    @media (max-width: 480px) {
      .cc-detail__back { padding-top: calc(var(--header-height) + var(--space-lg)); }
      .cc-detail__hero { gap: var(--space-xl); }
      .cc-detail__img { max-height: 420px; }
      .cc-detail__title { font-size: 2rem; }
      .cc-detail__price-value { font-size: 1.75rem; }
    }
  `]
})
export class CollectionConceptDetailComponent implements OnInit {
  collection: SpecialCollection | undefined;
  concept: CollectionConcept | undefined;

  constructor(
    private route: ActivatedRoute,
    public data: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const collectionId = params.get('collectionId');
      const conceptId = params.get('conceptId');
      this.collection = this.data.specialCollections.find(c => c.id === collectionId);
      this.concept = collectionId && conceptId
        ? this.data.getCollectionConceptById(collectionId, conceptId)
        : undefined;
      window.scrollTo({ top: 0 });
    });
  }
}
