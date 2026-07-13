import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

interface HeroSlide {
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  heroSlides: HeroSlide[] = [
    { image: 'images/homepage/slider/slider1.jpg' },
    { image: 'images/homepage/slider/slider2.jpg' },
    { image: 'images/homepage/slider/slider3.jpg' }
  ];

  aboutImages = [
    'images/homepage/about/about1.jpg',
    'images/homepage/about/about2.jpg',
    'images/homepage/about/about3.jpg',
    'images/homepage/about/about4.jpg'
  ];

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
