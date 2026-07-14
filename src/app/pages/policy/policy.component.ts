import { Component } from '@angular/core';
import { PolicyLayoutComponent, PolicySection } from '../../shared/components/policy-layout/policy-layout.component';
import { JourneyStepsComponent } from '../../shared/components/journey-steps/journey-steps.component';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [PolicyLayoutComponent, JourneyStepsComponent],
  template: `
    <app-policy-layout
      eyebrow="Chính sách"
      titleMain="Chính Sách"
      titleAccent="Hoạt Động"
      activeTab="policy"
      [sections]="sections"
    />
    <app-journey-steps />
  `
})
export class PolicyComponent {
  sections: PolicySection[] = [
    {
      icon: 'bi-calendar-check',
      title: 'Quy Trình Đặt Lịch',
      paragraphs: [
        'Khách hàng có thể đặt lịch trực tuyến qua website hoặc liên hệ trực tiếp qua hotline. Sau khi nhận được yêu cầu, nhân viên sẽ chủ động liên hệ trong vòng 2 giờ làm việc để tư vấn chi tiết và xác nhận thông tin.',
        'Chúng tôi khuyến nghị đặt lịch trước ít nhất 7–10 ngày để có đủ thời gian chuẩn bị concept, trang phục và makeup phù hợp nhất với bạn.'
      ]
    },
    {
      icon: 'bi-credit-card',
      title: 'Thanh Toán & Đặt Cọc',
      paragraphs: [
        'Khách hàng thanh toán cọc 30% giá trị gói dịch vụ để xác nhận lịch chụp chính thức. Phần còn lại (70%) được thanh toán vào ngày chụp trước khi bắt đầu buổi chụp.',
        'Các phương thức thanh toán được chấp nhận: chuyển khoản ngân hàng, ví Momo, VNPay hoặc tiền mặt tại studio. Hóa đơn sẽ được cung cấp theo yêu cầu.'
      ]
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Hủy & Dời Lịch',
      paragraphs: [
        'Dời lịch miễn phí: thông báo trước ít nhất 48 giờ so với giờ hẹn. Hủy lịch trước 24 giờ: hoàn lại 50% phí cọc. Hủy lịch trong vòng 24 giờ: không hoàn cọc do đội ngũ đã chuẩn bị đầy đủ nhân sự và props.',
        'Trong trường hợp bất khả kháng (thiên tai, tai nạn...), chúng tôi sẽ xem xét và linh hoạt hỗ trợ tối đa.'
      ]
    },
    {
      icon: 'bi-images',
      title: 'Giao Ảnh & Bảo Hành',
      paragraphs: [
        'Ảnh kỹ thuật số được giao qua Google Drive trong vòng 5–7 ngày làm việc. Gói Premium: 3–5 ngày. Ảnh gốc (RAW) được lưu trữ trên hệ thống trong 30 ngày kể từ ngày chụp.',
        'Album in và canvas được bảo hành 12 tháng với các lỗi sản xuất. Link ảnh cloud được lưu trữ 12 tháng.'
      ]
    },
    {
      icon: 'bi-shield-check',
      title: 'Quy Tắc Ứng Xử',
      paragraphs: [
        'Chúng tôi cam kết cung cấp môi trường chuyên nghiệp, an toàn và tôn trọng đối với tất cả khách hàng.',
        'Khách hàng được yêu cầu tôn trọng thiết bị, trang phục và không gian studio. Mọi hư hỏng do cố ý sẽ do khách hàng chịu trách nhiệm bồi thường.'
      ]
    }
  ];
}
