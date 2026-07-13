import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { DataService, SpecialCollection, CollectionConcept } from '../../shared/services/data.service';

@Component({
  selector: 'app-collection-detail',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  template: `
    <section class="collection-detail">
      @if (collection) {
        <!-- ===== Breadcrumb ===== -->
        <div class="container-custom collection-detail__back">
          <a routerLink="/gallery" class="collection-detail__back-link">
            <i class="bi bi-arrow-left"></i> Quay lại tất cả nhóm
          </a>
        </div>

        <!-- ===== Collection switch tabs ===== -->
        <div class="container-custom">
          <div class="collection-detail__tabs">
            @for (c of data.specialCollections; track c.id) {
              <a
                [routerLink]="['/collection', c.id]"
                class="collection-detail__tab"
                [class.active]="c.id === collection.id"
              >{{ c.name | uppercase }}</a>
            }
          </div>
        </div>

        <!-- ===== Sub-concept grid ===== -->
        <div class="collection-detail__concepts">
          <div class="container-custom">
            <div class="collection-detail__grid">
              @for (concept of concepts; track concept.id; let i = $index) {
                <a
                  [routerLink]="['/collection', collection.id, concept.id]"
                  class="collection-card animate-fade-in-up"
                  [style.animation-delay]="i * 100 + 'ms'"
                >
                  <div class="collection-card__media">
                    <img [src]="'assets/' + concept.image" [alt]="concept.name" class="collection-card__img" loading="lazy" />
                  </div>
                  <div class="collection-card__body">
                    <h3 class="collection-card__name">{{ concept.name | uppercase }}</h3>
                    <p class="collection-card__desc">{{ concept.cardDescription }}</p>
                    <div class="collection-card__sep"></div>
                    <div class="collection-card__footer">
                      <span class="collection-card__category">{{ concept.categoryLabel }}</span>
                      <span class="collection-card__price">Từ {{ concept.price }}</span>
                    </div>
                  </div>
                </a>
              } @empty {
                <div class="collection-detail__empty">
                  <i class="bi bi-camera"></i>
                  <p>Đang cập nhật concept cho bộ sưu tập này.</p>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- ===== Consultation CTA ===== -->
        <div class="collection-detail__consult">
          <div class="collection-detail__consult-bg">
            <div class="container-custom container-custom--narrow">
              <div class="collection-detail__consult-card animate-fade-in-up">
                <h2 class="collection-detail__consult-heading">
                  Bạn muốn một concept riêng cho<br />
                  <em class="collection-detail__consult-heading-em">câu chuyện của mình?</em>
                </h2>
                <p class="collection-detail__consult-sub">
                  Đội ngũ Ký Ức Studio sẽ thiết kế concept cá nhân hóa dành riêng cho bạn.
                </p>
                <a routerLink="/booking" class="btn-primary-custom btn-primary-custom--lg">
                  Đặt lịch tư vấn
                  <span class="btn-primary-custom__icon-circle"><i class="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <!-- Not Found -->
        <div class="collection-detail__not-found container-custom">
          <div class="collection-detail__not-found-icon"><i class="bi bi-collection"></i></div>
          <h1>Bộ sưu tập không tìm thấy</h1>
          <p>Bộ sưu tập này có thể đã bị xóa hoặc không tồn tại.</p>
          <a routerLink="/gallery" class="btn-primary-custom">Xem tất cả bộ sưu tập</a>
        </div>
      }
    </section>
  `,
  styles: [`
    .collection-detail {
      padding-bottom: var(--space-5xl);
      background: var(--color-bg-warm);
    }

    /* ===== Breadcrumb ===== */
    .collection-detail__back {
      padding-top: calc(var(--header-height) + var(--space-xl));
      padding-bottom: var(--space-xl);
    }
    .collection-detail__back-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      color: var(--color-primary);
      font-size: var(--text-sm);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-decoration: none;
      transition: opacity var(--transition-fast);
    }
    .collection-detail__back-link:hover { opacity: 0.7; }

    /* ===== Tabs ===== */
    .collection-detail__tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-sm);
      padding-bottom: var(--space-2xl);
    }
    .collection-detail__tab {
      padding: 0.7rem 1.4rem;
      border-radius: var(--radius-full);
      background: var(--color-bg-beige);
      color: var(--color-text-secondary);
      font-family: var(--font-display);
      font-size: var(--text-sm);
      font-weight: 600;
      letter-spacing: 0.03em;
      text-decoration: none;
      white-space: nowrap;
      transition: all var(--transition-fast);
    }
    .collection-detail__tab:hover {
      background: var(--color-bg-dark);
      color: #fff;
      opacity: 0.85;
    }
    .collection-detail__tab.active {
      background: var(--color-bg-dark);
      color: #fff;
    }

    /* ===== Concepts grid section ===== */
    .collection-detail__concepts {
      background: var(--color-bg-beige);
      padding: var(--space-3xl) 0 var(--space-4xl);
    }
    .collection-detail__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-lg);
    }
    .collection-detail__empty {
      grid-column: 1 / -1;
      text-align: center;
      padding: var(--space-5xl) var(--space-lg);
      color: var(--color-text-light);
    }
    .collection-detail__empty i {
      font-size: 3rem;
      display: block;
      margin-bottom: var(--space-md);
      opacity: 0.4;
    }

    /* ===== Sub-concept card ===== */
    .collection-card {
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
    .collection-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-card-hover);
    }
    .collection-card:hover .collection-card__img {
      transform: scale(1.04);
    }
    .collection-card__media {
      position: relative;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: var(--color-img-placeholder);
    }
    .collection-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .collection-card__body {
      padding: 18px 20px 20px;
    }
    .collection-card__name {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--color-text-name);
      margin: 0 0 8px 0;
      line-height: 1.25;
      letter-spacing: 0.01em;
    }
    .collection-card__desc {
      font-family: var(--font-body);
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.55;
      margin: 0 0 14px 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .collection-card__sep {
      height: 1px;
      background: var(--color-concept-card-sep);
      margin-bottom: 12px;
    }
    .collection-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: var(--text-xs);
    }
    .collection-card__category {
      color: var(--color-text-muted);
    }
    .collection-card__price {
      font-family: var(--font-accent);
      font-weight: 600;
      color: var(--color-text-primary);
    }

    /* ===== Consultation CTA ===== */
    .collection-detail__consult-bg {
      background: linear-gradient(180deg, #3D2B1F 0%, #2A1A12 100%);
      padding: var(--space-4xl) 0;
    }
    .collection-detail__consult-card {
      text-align: center;
      padding: var(--space-3xl);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-xl);
      backdrop-filter: blur(12px);
    }
    .collection-detail__consult-heading {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      color: #fff;
      margin: 0 0 var(--space-md) 0;
      font-weight: 600;
      letter-spacing: -0.01em;
      line-height: 1.4;
    }
    .collection-detail__consult-heading-em {
      font-style: italic;
      color: var(--color-accent-gold);
    }
    .collection-detail__consult-sub {
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.55);
      margin: 0 0 var(--space-xl) 0;
      line-height: 1.6;
    }

    /* ===== Not Found ===== */
    .collection-detail__not-found {
      text-align: center;
      padding: calc(var(--header-height) + var(--space-5xl)) var(--space-lg) var(--space-5xl);
    }
    .collection-detail__not-found-icon {
      font-size: 4rem;
      color: var(--color-border);
      margin-bottom: var(--space-lg);
    }
    .collection-detail__not-found h1 {
      font-family: var(--font-display);
      color: var(--color-text-primary);
      font-size: var(--text-3xl);
      margin-bottom: var(--space-sm);
    }
    .collection-detail__not-found p {
      color: var(--color-text-light);
      margin-bottom: var(--space-xl);
    }

    /* ===== Animations ===== */
    .animate-fade-in-up {
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ===== Responsive ===== */
    @media (max-width: 992px) {
      .collection-detail__grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .collection-detail__grid { grid-template-columns: 1fr; }
      .collection-detail__tabs { gap: var(--space-xs); }
      .collection-detail__tab { padding: 0.55rem 1rem; font-size: 0.75rem; }
    }
  `]
})
export class CollectionDetailComponent implements OnInit {
  collection: SpecialCollection | undefined;
  concepts: CollectionConcept[] = [];

  constructor(
    private route: ActivatedRoute,
    public data: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.collection = this.data.specialCollections.find(c => c.id === id);
      this.concepts = this.collection ? this.data.getCollectionConceptsByCollection(this.collection.id) : [];
      window.scrollTo({ top: 0 });
    });
  }
}
