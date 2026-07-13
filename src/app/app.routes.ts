import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'concepts',
    loadComponent: () => import('./pages/concepts/concepts.component').then(m => m.ConceptsComponent)
  },
  {
    path: 'collection/:collectionId/:conceptId',
    loadComponent: () => import('./pages/collection-concept-detail/collection-concept-detail.component').then(m => m.CollectionConceptDetailComponent)
  },
  {
    path: 'collection/:id',
    loadComponent: () => import('./pages/collection-detail/collection-detail.component').then(m => m.CollectionDetailComponent)
  },
  {
    path: 'concept/:id',
    loadComponent: () => import('./pages/concept-detail/concept-detail.component').then(m => m.ConceptDetailComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent)
  },
  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment.component').then(m => m.PaymentComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support.component').then(m => m.SupportComponent)
  },
  {
    path: 'policy',
    loadComponent: () => import('./pages/policy/policy.component').then(m => m.PolicyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
