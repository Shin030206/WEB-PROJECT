import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface PolicySection {
  icon: string;
  title: string;
  paragraphs: string[];
}

type PolicyTab = 'policy' | 'terms' | 'privacy';

@Component({
  selector: 'app-policy-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './policy-layout.component.html',
  styleUrls: ['./policy-layout.component.scss']
})
export class PolicyLayoutComponent {
  @Input() eyebrow = '';
  @Input() titleMain = '';
  @Input() titleAccent = '';
  @Input() updateDate = 'Tháng 6, 2026';
  @Input() activeTab: PolicyTab = 'policy';
  @Input() sections: PolicySection[] = [];

  navItems: { tab: PolicyTab; icon: string; title: string; link: string }[] = [
    { tab: 'policy', icon: 'bi-journal-text', title: 'Chính sách hoạt động', link: '/policy' },
    { tab: 'terms', icon: 'bi-pen', title: 'Điều khoản & điều kiện', link: '/terms' },
    { tab: 'privacy', icon: 'bi-shield-lock', title: 'Chính sách bảo mật', link: '/privacy' }
  ];
}
