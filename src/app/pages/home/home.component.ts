import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';

interface HeroSlide {
  image: string;
}

interface AboutPhoto {
  image: string;
  alt: string;
  variant: 'backdrop' | 'rack' | 'makeup' | 'shoot';
}

interface Package {
  id: string;
  eyebrow: string;
  name: string;
  duration: string;
  photoCount: string;
  priceOld: string;
  priceNew: string;
  features: string[];
  image: string;
}

interface GalleryPhoto {
  image: string;
  alt: string;
  category: 'gia-dinh' | 'cap-doi' | 'ca-nhan';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BookingFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  heroSlides: HeroSlide[] = [
    { image: 'images/homepage/slider/slider1.jpg' },
    { image: 'images/homepage/slider/slider2.jpg' },
    { image: 'images/homepage/slider/slider3.jpg' }
  ];

  aboutPhotos: AboutPhoto[] = [
    { image: 'images/homepage/about-new/backdrop.jpg', alt: 'Phòng chụp studio Ký Ức', variant: 'backdrop' },
    { image: 'images/homepage/about-new/rack.jpg', alt: 'Kho trang phục Ký Ức Studio', variant: 'rack' },
    { image: 'images/homepage/about-new/makeup.jpg', alt: 'Trang điểm trước buổi chụp', variant: 'makeup' },
    { image: 'images/homepage/about-new/shoot.jpg', alt: 'Ekip Ký Ức đang tác nghiệp', variant: 'shoot' }
  ];

  packages: Package[] = [
    {
      id: 'essential',
      eyebrow: 'CÂU CHUYỆN ĐẦU TIÊN',
      name: 'ESSENTIAL STORY',
      duration: '2 tiếng',
      photoCount: '30 ảnh đã chỉnh sửa',
      priceOld: '4.500.000đ',
      priceNew: '3.800.000đ',
      features: ['1 concept trang phục', 'Makeup & hair cơ bản', 'Studio indoor', '30 ảnh retouched', 'Album kỹ thuật số'],
      image: 'images/homepage/packages/essential.jpg'
    },
    {
      id: 'couple',
      eyebrow: 'CÂU CHUYỆN CẶP ĐÔI',
      name: 'COUPLE STORY',
      duration: '3 tiếng',
      photoCount: '30 ảnh đã chỉnh sửa',
      priceOld: '5.500.000đ',
      priceNew: '4.800.000đ',
      features: ['1 concept trang phục', 'Makeup & hair cơ bản', 'Studio indoor', '30 ảnh retouched', 'Album kỹ thuật số'],
      image: 'images/homepage/packages/couple.jpg'
    },
    {
      id: 'family',
      eyebrow: 'CÂU CHUYỆN GIA ĐÌNH',
      name: 'FAMILY STORY',
      duration: '3 tiếng',
      photoCount: '50 ảnh đã chỉnh sửa',
      priceOld: '6.500.000đ',
      priceNew: '5.800.000đ',
      features: ['Tối đa 6 thành viên', 'Concept gia đình ấm áp', 'Makeup cho 2 người lớn', '50 ảnh retouched', 'Album gia đình cao cấp'],
      image: 'images/homepage/packages/family.jpg'
    }
  ];

  galleryFilters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'gia-dinh', label: 'Gia đình' },
    { id: 'cap-doi', label: 'Cặp đôi' },
    { id: 'ca-nhan', label: 'Cá nhân' }
  ];

  galleryPhotos: GalleryPhoto[] = [
    { image: 'images/homepage/bst/hat-woman.jpg', alt: 'Chân dung ngoại cảnh', category: 'ca-nhan' },
    { image: 'images/homepage/bst/closeup-portrait.jpg', alt: 'Chân dung cận cảnh', category: 'ca-nhan' },
    { image: 'images/homepage/bst/car-guys.jpg', alt: 'Bộ ảnh cá tính', category: 'ca-nhan' },
    { image: 'images/homepage/bst/bw-portrait.jpg', alt: 'Chân dung đen trắng', category: 'ca-nhan' },
    { image: 'images/homepage/bst/street-fashion.jpg', alt: 'Dạo phố cùng hội bạn', category: 'ca-nhan' },
    { image: 'images/homepage/bst/family-white.jpg', alt: 'Gia đình sum vầy', category: 'gia-dinh' },
    { image: 'images/homepage/bst/school-group.jpg', alt: 'Kỷ yếu nhóm bạn', category: 'ca-nhan' },
    { image: 'images/homepage/bst/wedding-group.jpg', alt: 'Cặp đôi ngày cưới', category: 'cap-doi' }
  ];

  activeGalleryFilter = 'all';

  currentSlide = 0;
  private readonly slideDuration = 5500;
  private slideTimer?: ReturnType<typeof setInterval>;

  constructor(public data: DataService) {}

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  setGalleryFilter(filterId: string) {
    this.activeGalleryFilter = filterId;
  }

  get filteredGalleryPhotos(): GalleryPhoto[] {
    if (this.activeGalleryFilter === 'all') return this.galleryPhotos;
    return this.galleryPhotos.filter(p => p.category === this.activeGalleryFilter);
  }

  private startAutoplay() {
    this.slideTimer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    }, this.slideDuration);
  }

  private stopAutoplay() {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
  }
}
