import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  showOtp = false;
  submitted = false;

  loginData = { phone: '', password: '' };
  registerData = {
    name: '', phone: '', password: '', confirmPassword: '', otp: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLogin = this.route.snapshot.queryParamMap.get('mode') !== 'register';
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.showOtp = false;
    this.submitted = false;
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Login:', this.loginData);
    }
  }

  onRegister(form: NgForm) {
    if (form.valid && this.registerData.password === this.registerData.confirmPassword) {
      if (!this.showOtp) {
        this.showOtp = true;
      } else {
        this.submitted = true;
        console.log('Register:', this.registerData);
      }
    }
  }
}
