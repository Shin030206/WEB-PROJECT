import { Injectable, signal } from '@angular/core';

const USERS_KEY = 'kyuc_users';
const SESSION_KEY = 'kyuc_session';

interface StoredUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<AuthUser | null>(this.readSession());

  get isLoggedIn(): boolean {
    return !!this.currentUser();
  }

  async register(data: { name: string; email: string; phone: string; password: string }): Promise<AuthUser> {
    const users = this.readUsers();
    if (users.some(u => u.email === data.email)) {
      throw new Error('Email đã được đăng ký');
    }
    if (data.phone && users.some(u => u.phone === data.phone)) {
      throw new Error('Số điện thoại đã được đăng ký');
    }

    const user: StoredUser = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      passwordHash: await hashPassword(data.password)
    };
    users.push(user);
    this.writeUsers(users);

    return this.setSession(user);
  }

  async login(data: { phone: string; password: string }): Promise<AuthUser> {
    const users = this.readUsers();
    const user = users.find(u => u.phone === data.phone);
    const passwordHash = await hashPassword(data.password);

    if (!user || user.passwordHash !== passwordHash) {
      throw new Error('Số điện thoại hoặc mật khẩu không đúng');
    }

    return this.setSession(user);
  }

  logout(): void {
    localStorage.removeItem(SESSION_KEY);
    this.currentUser.set(null);
  }

  private readUsers(): StoredUser[] {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private writeUsers(users: StoredUser[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  private readSession(): AuthUser | null {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  private setSession(user: StoredUser): AuthUser {
    const publicUser: AuthUser = { id: user.id, name: user.name, email: user.email, phone: user.phone };
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    this.currentUser.set(publicUser);
    return publicUser;
  }
}
