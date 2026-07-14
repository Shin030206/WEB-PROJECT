import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  submitted = false;
  loading = false;
  errorMessage = '';

  loginData = { phone: '', password: '' };
  registerData = {
    name: '', email: '', phone: '', password: '', confirmPassword: '', agree: false
  };

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.isLogin = this.route.snapshot.queryParamMap.get('mode') !== 'register';
  }

  toggleMode() {
    this.setMode(!this.isLogin);
  }

  setMode(isLogin: boolean) {
    this.isLogin = isLogin;
    this.submitted = false;
    this.errorMessage = '';
  }

  async onLogin(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.errorMessage = '';
    try {
      await this.auth.login(this.loginData);
      this.submitted = true;
    } catch (err) {
      this.errorMessage = err instanceof Error ? err.message : 'Đăng nhập thất bại, vui lòng thử lại';
    } finally {
      this.loading = false;
    }
  }

  async onRegister(form: NgForm) {
    if (!form.valid || this.registerData.password !== this.registerData.confirmPassword) return;

    this.loading = true;
    this.errorMessage = '';
    try {
      const { name, email, phone, password } = this.registerData;
      await this.auth.register({ name, email, phone, password });
      this.submitted = true;
    } catch (err) {
      this.errorMessage = err instanceof Error ? err.message : 'Đăng ký thất bại, vui lòng thử lại';
    } finally {
      this.loading = false;
    }
  }
}
