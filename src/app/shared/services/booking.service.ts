import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const BOOKINGS_KEY = 'kyuc_bookings';

export interface BookingPayload {
  name: string;
  phone: string;
  concept: string;
  idea: string;
  note: string;
}

export interface Booking extends BookingPayload {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  userId: string | null;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private auth: AuthService) {}

  create(payload: BookingPayload): Booking {
    const bookings = this.readAll();
    const booking: Booking = {
      ...payload,
      id: crypto.randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      userId: this.auth.currentUser()?.id ?? null
    };
    bookings.push(booking);
    this.writeAll(bookings);
    return booking;
  }

  getMine(): Booking[] {
    const userId = this.auth.currentUser()?.id;
    if (!userId) return [];
    return this.readAll().filter(b => b.userId === userId);
  }

  private readAll(): Booking[] {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private writeAll(bookings: Booking[]): void {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }
}
