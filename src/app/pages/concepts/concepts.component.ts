import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { ConceptCardComponent, Concept } from '../../shared/components/concept-card/concept-card.component';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [RouterLink, ConceptCardComponent, BookingFormComponent],
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {
  /* Overview mode: true = show "100+ concept" hero + category cards (default landing on /concepts).
     false = show the filtered listing for a single category (/concepts?category=X). */
  showOverview = true;
  categoryCards: Concept[] = [];

  activeFilter = 'Tất cả';
  filteredConcepts: Concept[] = [];

  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryCards = this.data.serviceCards
      .filter(card => card.name !== 'Bạn bè · Sinh nhật')
      .map(card => ({
        id: card.queryCategory,
        name: card.name,
        category: card.queryCategory,
        eyebrow: card.tagline,
        description: card.description,
        price: card.price,
        priceNote: '',
        image: card.image,
        conceptCount: Number(card.conceptCount)
      }));

    this.route.queryParams.subscribe(params => {
      const cat = params['category'];
      if (cat && this.data.filterCategories.includes(cat)) {
        this.showOverview = false;
        this.filterConcepts(cat);
      } else {
        this.showOverview = true;
      }
    });
  }

  backToOverview() {
    this.showOverview = true;
    this.router.navigate([], { queryParams: {}, replaceUrl: true });
  }

  filterConcepts(category: string) {
    this.activeFilter = category;
    this.showOverview = false;
    this.router.navigate([], {
      queryParams: category !== 'Tất cả' ? { category } : {},
      replaceUrl: true
    });
    this.filteredConcepts = this.data.getConceptsByCategory(category);
  }

  getCategoryDescription(): string {
    const descriptions: Record<string, string> = {
      'Chân dung': 'Cá nhân — một câu chuyện. Khoảnh khắc của riêng bạn trước khi có bạn đời, trước khi thành mẹ. Mỗi cột mốc bạn muốn ghi lại cho chính mình.',
      'Couple': 'Hai người, một câu chuyện. Cho đôi đang yêu, đôi sắp cưới, đôi đã cùng nhau qua bao mùa. Bộ ảnh chung là cách giữ lại một chương yêu thương đẹp nhất.',
      'Gia đình': 'Từ hạt nhân đến ba thế hệ. Bé lớn nhanh lắm. Bà mỗi ngày một khác. Hôm nay là lúc để lưu lại câu chuyện của cả nhà — trước khi thời gian cuốn đi.',
      'Mẹ và con': 'Khoảnh khắc thiêng liêng nhất. Từ những ngày mang bầu đến lúc bé lớn dần — mỗi ánh nhìn, mỗi cái ôm đều đáng được giữ lại mãi mãi.',
      'Áo dài': 'Áo dài Việt — cổ điển và hiện đại. Tà áo dài Việt tôn lên nét duyên của người phụ nữ Việt qua từng dáng vẻ, từ truyền thống đến cách tân.',
    };
    return descriptions[this.activeFilter] || '';
  }
}
